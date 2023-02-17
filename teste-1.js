const bob=document.querySelectorAll(".tbodyBoletim");
var input = document.createElement('input');
input.type = 'file';
input.onchange = e => { 
        var file = e.target.files[0]; 
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');
        reader.onload = readerEvent => {
                var ttt={};
                var content = JSON.parse(readerEvent.target.result);
                content.forEach(x => ttt[x[0]]=x.slice(1));
                for (var i=0; i < bob.length; i++) {
                        const asd=Array.from(bob[i].cells).map(td => td.firstChild);
                        var mat=asd[1].textContent;
                        if (ttt[mat]) {
                                var j=0;
                                asd.slice(3,13).filter(e => !e.disabled).forEach(e => e.value=ttt[mat][j++] ?? 0);
                        }
                }
        }
}
input.click();
