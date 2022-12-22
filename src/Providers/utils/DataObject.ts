/* eslint-disable no-unused-vars */
import {
  ClientsTableData,
  DataTypes,
  TablesData,
  VendaTableData,
  CatracaTableData,
  ContatoTableData,
} from '../Data/types/dataTypes';

type dataObjectArr = {
  tableName: DataTypes;
  tableData: TablesData;
};

export default class DataObject {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected TableName: DataTypes,
    protected TableData: TablesData, // eslint-disable-next-line no-empty-function, brace-style
  ) {}

  get tableName(): string {
    return this.TableName;
  }

  private handleClientsData(): dataObjectArr[] {
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

    const tableData = this.TableData as ClientsTableData[];

    const helloParkData: ClientsTableData[] = [];
    const pmData: ClientsTableData[] = [];

    tableData.forEach((data) => {
      if (blockedRegisterTypes.includes(data.tipo_cadastro)) return;

      if (
        data.id_tipo_cadastro === 32
        || data.id_tipo_cadastro === 33
        || data.id_tipo_cadastro === 34
      ) {
        helloParkData.push(data);
      } else {
        pmData.push(data);
      }
    });

    return [
      { tableName: 'clientes-HelloPark', tableData: helloParkData },
      { tableName: 'clientes', tableData: pmData },
    ];
  }

  private handleVendasData(): dataObjectArr[] {
    const tableData = this.TableData as VendaTableData[];

    const helloParkData: VendaTableData[] = [];
    const pmData: VendaTableData[] = [];

    tableData.forEach((data) => {
      if (data.id_empresa.trim() === '03') {
        helloParkData.push(data);
      } else {
        pmData.push(data);
      }
    });

    return [
      { tableName: 'Vendas-HelloPark', tableData: helloParkData },
      { tableName: 'venda', tableData: pmData },
    ];
  }

  private handleCatracaData(): dataObjectArr[] {
    const tableData = this.TableData as CatracaTableData[];

    const helloParkData: CatracaTableData[] = [];
    const pmData: CatracaTableData[] = [];

    tableData.forEach((data) => {
      if (data.id_empresa.trim() === '03') {
        helloParkData.push(data);
      } else {
        pmData.push(data);
      }
    });

    return [
      { tableName: 'catraca-HelloPark', tableData: helloParkData },
      { tableName: 'catraca', tableData: pmData },
    ];
  }

  private handleContatosData(): dataObjectArr[] {
    const tableData = this.TableData as ContatoTableData[];

    const helloParkData: ContatoTableData[] = [];
    const pmData: ContatoTableData[] = [];

    tableData.forEach((data) => {
      pmData.push(data);
    });

    return [
      { tableName: 'contatos-HelloPark', tableData: helloParkData },
      { tableName: 'contatos', tableData: pmData },
    ];
  }

  get tableData(): dataObjectArr[] {
    if (this.tableName === 'clientes') {
      return this.handleClientsData();
    }
    if (this.tableName === 'venda') {
      return this.handleVendasData();
    }
    if (this.tableName === 'catraca') {
      return this.handleCatracaData();
    }
    if (this.tableName === 'contatos') {
      return this.handleContatosData();
    }

    return [{ tableName: 'calendario', tableData: this.TableData }];
  }
}
