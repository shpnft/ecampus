javascript:(function () {
    var table = document.querySelector("#updateMeCronograma > div.list > table");
    if (!table) {
        alert("Tabela não encontrada.");
        return;
    }

    function csvEscape(value) {
        value = (value ?? "").toString();
        return '"' + value.replace(/"/g, '""') + '"';
    }

    var rows = [];

    for (var i = 1; i < table.rows.length; i++) {
        var tableRow = table.rows[i];
        var rowData = [];

        for (var j = 0; j < tableRow.cells.length; j++) {
            rowData.push(csvEscape(tableRow.cells[j].textContent));
        }

        rows.push(rowData.join(";"));
    }

    /* BOM ajuda o Excel a reconhecer UTF-8 corretamente */
    var csvContent = "\uFEFF" + rows.join("\r\n");
    var dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);

    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.download = "cronograma.csv";
    downloadAnchorNode.href = dataStr;
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
})();
