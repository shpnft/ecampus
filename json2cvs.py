import json,csv

with open("cronograma.json","r",encoding="utf-8") as f:
    dados = json.load(f)

for l in dados:
    l[2] = {"Teórica":0, "Prática":1}[l[2]]
    l[4] = 0

dados.insert(0,["Data\n(DD/MM/YYYY)",
                "Carga Horária",
                "Tipo de Aula\n(0: Teórica, 1: Prática)",
                "Conteúdo",
                "Professor\n(0: Primeiro professor, 1: Segundo professor etc)"
                ])
with open("cronograma.csv","w",encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(dados)
