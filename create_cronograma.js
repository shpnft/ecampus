javascript: (() => {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
                var file = e.target.files[0]; 
                var reader = new FileReader();
                reader.readAsText(file,'UTF-8');
                reader.onload = readerEvent => {
                        var content = JSON.parse(readerEvent.target.result);
                        for (var i=0; i<content.length; i++) {
                                document.querySelector("#dtAula").value=content[i][0];
                                document.querySelector("#cargaHoraria").value=content[i][1];
                                document.querySelector("#tipoAula").value=document.querySelector("#tipoAula").options[content[i][2]].value;
                                document.querySelector("#contratoRh").value=document.querySelector("#contratoRh").options[content[i][3]].value;
                                document.querySelector("#conteudo").value=content[i][4];
                                document.querySelector("#adicionarCronograma").click();
                        }
                }
        };
        input.click();
}
)();
