a=document.querySelectorAll("input.exercicio:not([disabled])")
c=[]
for (i=0; i < a.length;i++) c.push(a[i].value)
d=window.open("about:blank")
d.document.write(c.join("<br>")
