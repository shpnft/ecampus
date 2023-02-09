javascript: (() => {
        var n=document.getElementById("updateMeCronograma").children[0].children[0].rows.length;
        var bob = new Array(n-1);
        for (var i=0; i < n-1; i++) {
                bob[i]=document.getElementById("updateMeCronograma").children[0].children[0].rows[i+1].cells[6].children[0].name;
        };
        bob.forEach(excluirCronograma)
}
) ();
