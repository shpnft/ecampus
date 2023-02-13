javascript: (() => {
        data = Array.from(document.querySelectorAll("#updateMeCronograma > div.list > table > tbody > tr td:nth-child(4)")).map(td => td.innerHTML);
        data = JSON.stringify(data, undefined, 4);
        var blob = new Blob([data], {
                type: 'text/json'
        }),
                e = document.createEvent('MouseEvents'),
                a = document.createElement('a');

        a.download = "cronograma.json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
}
)();
