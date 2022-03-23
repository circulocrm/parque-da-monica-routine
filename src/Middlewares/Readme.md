# Middlewares

Os middlewares são funções que podem ser aplicadas entre cada requição, ou em todas as requisições, possibilitando assim o tratamento de dados antes da chamada da requisição em si.

# loginRequired 

Responsável pela conferencia do status do usuario.

O objetivo principal é chegar se existe uma sessão desse usúario, ou seja, se ele está logado ou se possui um token válido.
Caso não sejam atendidos esses parametros, o usúario é redirecionado para a tela de login

# globalMiddleware 

Middleware aplicado em todas as rotas, com o objetivo de passar as mensagens 'flash' para dentro dos views
