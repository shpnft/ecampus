Código usado para automatizar a criação de cronogramas em planos de ensino no
portal ecampus/ufam

# Deletar cronograma
Acesse a edição do cronograma do plano de ensino, abra as ferramentas do desenvolvedor
(tipicamente Ctrl-Shift-I), cole o conteúdo do arquivo delete_cronograma.js e aperte
a tecla Enter. Espere o processamento terminar e confirme que todo o cronograma 
anterior foi apagado

# "Copiar" cronograma
Acesse a edição ou exibição do cronograma do plano de ensino, abra as ferramentas do desenvolvedor
(tipicamente Ctrl-Shift-I), cole o conteúdo do arquivo extract_cronograma.js e aperte a tecla
Enter. Salve o arquivo .json gerado

# "Criando" cronograma
Em uma planilha crie uma lista de datas com tamanho igual ao de dias letivos.
Cole essa lista na variável dias do arquivo create_cronograma.py. Edite o arquivo
.json obtido ao "copiar"cronograma ou edite o exemplo.json com o conteúdo de cada
dia letivo. Execute o script create_cronograma.py e cole a saída no console das
ferramentas do desenvolvedor (tipicamente Ctrl-Shift-I) na página de edição
de cronograma, apertando Enter após colar. Verifique se tudo está de acordo
com o esperado

# Bugs

Esses scripts não são para uso por pessoas sem treinamento e podem possivelmente
causar danos materiais. Use com extrema cautela
