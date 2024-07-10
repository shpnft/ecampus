import json,csv
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("csv_filename")
parser.add_argument("json_filename")
args = parser.parse_args()

with open(args.csv_filename,"r",encoding="utf-8") as f:
    reader = csv.reader(f)
    dados = list(reader)

with open(args.json_filename,"w",encoding="utf-8") as f:
    json.dump(dados,f)

# checking
dados.pop(0) # removendo o cabeçalho
soma=0
for l in dados:
    soma=soma+int(l[1])
print(f"{soma} horas de aula distribuídas em {len(dados)} aulas")

