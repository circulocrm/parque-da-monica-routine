export type DataTypes = 'clientes' | 'catraca' | 'venda' | 'calendario';

type ClientsTableData = {
  'id_consulta': number,
  'id_cliente': number,
  'nome_fantasia': string,
  'razao_social': string,
  'id_tipo_cadastro': number,
  'tipo_cadastro': string,
  'cnpj': number,
  'email': string,
  'telefone': string,
  'newsletter': number,
  'id_regiao': string,
  'regiao': string,
  'data_alteracao': string
};

type CalendarioTableData = {
  'id_consulta': number,
  'id_calendario': number,
  'previcao_visita': number,
  'observacao': string,
  'valor_por_acrescimo': null | string,
  'valor_por_desconto': null | string,
  'limite_web': null | string,
  'feriado': number,
  'parque_fechado': number,
  'parque_fechado_venda': number,
  'data_alteracao': string
};

type VendaTableData = {
  'id_consulta': number,
  'id_venda': number,
  'pedido': string,
  'origem': string,
  'status_venda': string,
  'data_venda': string,
  'data_cancelamento': null | string,
  'id_cupom': string,
  'id_cliente': number,
  'id_produto': string,
  'produto': string,
  'valor_total': number,
  'valor_preco_base': number,
  'valor_unitario': number,
  'PASSAPORTE_FULL': string,
  'data_alteracao': string
};

export type TablesData = ClientsTableData[] | CalendarioTableData[] | VendaTableData[] | [];
