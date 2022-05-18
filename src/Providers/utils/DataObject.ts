/* eslint-disable no-unused-vars */
import { ClientsTableData, TablesData } from '../Data/types/dataTypes';

export default class DataObject {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected TableName: 'clientes' | 'venda' | 'catraca' | 'calendario' | '',
    protected TableData: TablesData,
    // eslint-disable-next-line no-empty-function
  ) { }

  private handleClientRegisterTypes(value: ClientsTableData) {
    const blockedRegisterTypes = [
      'FORNECEDOR',
      'REPRESENTANTES',
      'FINANCEIRO',
      'INSTITUIÇÂO',
      'GRUPO AUTONOMO',
      'CANAL PARCEIROS',
      'INTITUIÇÃO',
      'ESCOLA - NÃO UTILIZAR ESSE CADASTRO',
      'ESCOLA INTERIOR',
      'ESCOLA PARTICULAR',
      'ESCOLA PUBLICA',
    ];

    return !blockedRegisterTypes.includes(value.tipo_cadastro)
  }

  get tableName(): string {
    return this.TableName;
  }

  get tableData(): TablesData {
    if (this.tableName === 'clientes') {
      const tableData = this.TableData as ClientsTableData[]
      return tableData.filter(this.handleClientRegisterTypes)
    }
    return this.TableData;
  }
}
