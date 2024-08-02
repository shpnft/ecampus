javascript: (function () {
        var entrada =window.open("about:blank");
        htmlbump="<textarea id='notas' cols=80 rows=24></textarea><br><button id='gogog'>Colar</button>";
        entrada.document.write(htmlbump);

        gogog=entrada.document.getElementById("gogog");
        var bolonhesa=[];
        gogog.onclick=function () {
                const notas=entrada.document.getElementById("notas");
                let dados=notas.value.split("\n");
                for (let i=0; i < dados.length;i++) {
                        let temp=dados[i].split("\t");
                        let flag=1;
                        for (let j=0; j < temp.length; j++) { 
                                if (/\d+,?\d*/.test(temp[j])) {
                                        temp[j] = parseFloat(temp[j].replaceAll(",","."));
                                } else {
                                        flag=0;
                                        break;
                                }
                        }
                        /* ignora sem avisar #yolo */
                        if (flag) bolonhesa.push(temp); else bolonhesa.push([]);
                }
                entrada.close();
                /* console.log(bolonhesa); */

                const tabela=document.querySelectorAll("tr.tbodyBoletim:not(.trancado)");
                for (let i=0; i < tabela.length; i++) {
                        if (i+1 > bolonhesa.length) break;
                        const linha=tabela[i].querySelectorAll("input.nota:not([disabled])");
                        for (let j=0; j < linha.length; j++) {
                                if (j+1 > bolonhesa[i].length) break;
                                linha[j].value = bolonhesa[i][j];
                                linha[j].dispatchEvent(new Event('blur'));
                        }
                }
        }
}
)();


