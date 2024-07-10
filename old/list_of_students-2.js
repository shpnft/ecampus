javascript: (() => {
const bob=document.querySelectorAll(".tbodyBoletim");
var alunos = [];
for (var i=0; i < bob.length; i++) {
        let aluno = [];
        const asd=Array.from(bob[i].cells).map(td => td.firstChild);
        asd.slice(2,3).forEach(e => aluno.push(e.textContent));
        asd.slice(3,13).filter(e => !e.disabled).forEach(e => aluno.push(e.value));
        alunos.push(aluno);
}
previewWinRef = window.open("about:blank");
previewWinRef.document.write(alunos.join("<br>"));
}
)();
