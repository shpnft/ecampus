import json,csv
import argparse
import re
from datetime import datetime

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

# texto colorido
WARNING = "\033[93m"
ENDC = "\033[0m"
aviso=lambda x: print(f"{WARNING}"+x+f"{ENDC}")

soma=0
for l in dados:
    soma=soma+int(l[1])

    if re.match(r"\d\d/\d\d/\d\d\d\d",l[0]) is None:
        aviso(f"{l[0]} é uma data inválida (não está no formato DD/MM/YYYY)")
    try:
        data = datetime.strptime(l[0],"%d/%m/%Y")
    except ValueError:
        aviso(f"{l[0]} é uma data inválida (a função strptime não reconheceu)")

    if not len(l) == 5:
        aviso("Todas as linhas devem ter 5 colunas: data, carga horária, tipo de aula, conteúdo, professor")

print(f"{soma} horas de aula distribuídas em {len(dados)} aulas")

