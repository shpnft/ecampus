// https://github.com/edubey/browser-console-crawl
//
var listPath = document.getElementById("updateMeCronograma").getElementsByClassName("list")[0];

// Console API to clear console before logging new data
console.API;
if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== 'undefined') {
        console.API = console;
}

function getContent() {
        console.API.clear();
        chuchu = [];

        evenLines = listPath.getElementsByClassName("even");
        oddLines  = listPath.getElementsByClassName("odd");
        for (var i=0; i < oddLines.length; i++) {
                chuchu[2*i]=oddLines[i].getElementsByTagName("td")[3].innerHTML;
                chuchu[2*i+1]=evenLines[i].getElementsByTagName("td")[3].innerHTML;
        }
        console.save(chuchu,"chuchu.json");

}

console.save = function (data, filename) {
        if (!data) {
                console.error('Console.save: No data')
                return;
        }

        if (!filename) filename = 'story.json'

        if (typeof data === "object") {
                data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {
                type: 'text/json'
        }),
                e = document.createEvent('MouseEvents'),
                a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
}

getContent();
