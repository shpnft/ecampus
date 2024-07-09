javascript: (function () {
        var table = document.querySelector("#updateMeCronograma > div.list > table");

        /*  https://stackoverflow.com/a/60196347/20287521 */
        var data = [];
        for (var i = 1; i < table.rows.length; i++) {
                var tableRow = table.rows[i];
                var rowData = [];
                for (var j = 0; j < tableRow.cells.length; j++) {
                        rowData.push(tableRow.cells[j].innerHTML);
                }
                data.push(rowData);
        }

        /* https://stackoverflow.com/a/30800715/20287521 */
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.download = "cronograma.json";
        downloadAnchorNode.href = dataStr;
        document.body.appendChild(downloadAnchorNode); /* required for firefox */
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
}
)();
