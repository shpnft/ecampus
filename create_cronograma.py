import json
import argparse
import datetime

dias = """
18/10/2022
20/10/2022
25/10/2022
27/10/2022
03/11/2022
08/11/2022
10/11/2022
17/11/2022
22/11/2022
24/11/2022
29/11/2022
01/12/2022
06/12/2022
13/12/2022
15/12/2022
20/12/2022
22/12/2022
03/01/2023
05/01/2023
10/01/2023
12/01/2023
17/01/2023
19/01/2023
24/01/2023
26/01/2023
31/01/2023
02/02/2023
07/02/2023
09/02/2023
14/02/2023
"""
dias=dias.split()
dias=["{:02d}/{:02d}/{:4d}".format(* map(int,a.split("/"))) for a in dias]

parser = argparse.ArgumentParser()
parser.add_argument("json")
args = parser.parse_args()

with open(args.json, "r") as f:
    conteudo = json.load(f)

for xy in zip(dias,conteudo):
    print(f'document.getElementById("dtAula").value="{xy[0]}"')
    print('document.getElementById("cargaHoraria").value=2')
    print('document.getElementById("tipoAula").value=document.getElementById("tipoAula1").options[0].value')
    print('document.getElementById("contratoRh").value=document.getElementById("contratoRh1").options[0].value')
    print(f'document.getElementById("conteudo").value={repr(xy[1])}')
    print('document.getElementById("adicionarCronograma").click()')
    print()
