import json,csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("json_filename")
parser.add_argument("csv_filename")
args = parser.parse_args()

with open(args.json_filename,"r",encoding="utf-8") as f:
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

with open(args.csv_filename,"w",encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(dados)

# checking
dados.pop(0) # removendo o cabeçalho
soma=0
for l in dados:
    soma=soma+int(l[1])
print(f"{soma} horas de aula distribuídas em {len(dados)} aulas")
