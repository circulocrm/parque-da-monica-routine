
# Routes

Temos como rotas todas as URLs de nossa API destinadas para a renderização de componentes visuais para exibição de informações e interações.

## Index

Arquivo de exportação padrao das rotas para importação e utilização no app.

## Login

>``/login``

Esta rota é responsavel pela renderização da tela de login.

Ela recebe o metodo GET para renderizar a view __*loginScreen.ejs*__ que sera responsalvel pela exibição da tela de login.

>``/login-request``

Essa rota é responsavel pela validação de usuario.

Ela recebe o metodo POST para fazer a utilizacao do metodo __*handle*__ da clase __LogUserController__ que fara a validação das credenciais junto aos registros de usuarios no banco de dados.

## HOME

>``/``

Essa rota é para a renderização do dashboard que contem logs e status da API.

Ela recebe o metodo GET e realializa a renderização da view __index.ejs__.
