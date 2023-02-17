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
        }
}
input.click();
