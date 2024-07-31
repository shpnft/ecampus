javascript: (function () {
        const tabela=document.querySelectorAll("tr.tbodyBoletim:not(.trancado)");
        var notas=[];
        for (i=0; i < tabela.length; i++) {
                temp=[];
                /* posição na lista, matrícula, nome */
                for (j=0; j < 3; j++) temp.push(tabela[i].cells[j].innerText);

                /* const linha=tabela[i].querySelectorAll("input.nota:not([disabled]):not(.prova)");*/
                const linha=tabela[i].querySelectorAll("input.nota:not([disabled])");
                for (j=0; j < linha.length; j++) temp.push(linha[j].value);

                /*notas.push(temp.toString());*/
                notas.push("\""+temp.join("\",\"")+"\"");
        }
        var saida=window.open("about:blank");
        saida.document.write(notas.join("<br>"));
}
)();
