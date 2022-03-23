# Scheema

Esta pasta é destinada a representação das entidades e seus atributos para a criação de suas tabelas no banco de dados.

## LogModel

Representão da tabela de __logs__ para registro de todos as transferencias de dados e seus status.

### Atributos

- Connected:
  - Tipo: Booleano
  - Obrigadtorio: Sim
  - Atributo que indica a coneção. __True__ para conectado e __False__ para desconectado.

- Text:
  - Tipo: String
  - Obrigadtorio: Sim
  - Atributo para as mensagens de transfarencia

- Date:
  - Tipo: String
  - Obrigadtorio: Sim
  - Indica a data que dos registros que foram transferidos

- Table:
  - Tipo: String
  - Obrigadtorio: Sim
  - Nome da tabela(Data Extension) que esta recebendo os dados

- Success:
  - Tipo: Booleano
  - Obrigadtorio: Sim
  - Informa o sucesso da tranferencia, __True__ para transferencias bem sucedidas e __False__ para transferencias malsucedidas

- Created at:
  - Tipo: Booleano
  - Obrigadtorio: Sim
  - Data em que a tranferencia foi realizada

## UserModel

Representação da tabela de usuarios com seus atributos representando as suas credenciais.

### Atributos

- Email:
  - Tipo: String
  - Obrigadtorio: Sim
  - Email do usuario

- Password:
  - Tipo: String
  - Obrigadtorio: Sim
  - Senha para validação do usuaro
