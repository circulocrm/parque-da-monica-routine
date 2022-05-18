const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'file.csv',
  header: [
    { id: 'id_consulta', title: 'id_consulta' },
    { id: 'id_catraca', title: 'id_catraca' },
    { id: 'utilizacoes', title: 'utilizacoes' },
    { id: 'pedido', title: 'pedido' },
    { id: 'passaporte_full', title: 'passaporte_full' },
    { id: 'data_alteracao', title: 'data_alteracao' },
    // { id: 'id_cliente', title: 'id_cliente' },
    // { id: 'nome_fantasia', title: 'nome_fantasia' },
    // { id: 'razao_social', title: 'razao_social' },
    // { id: 'id_tipo_cadastro', title: 'id_tipo_cadastro' },
    // { id: 'tipo_cadastro', title: 'tipo_cadastro' },
    // { id: 'cnpj', title: 'cnpj' },
    // { id: 'email', title: 'email' },
    // { id: 'telefone', title: 'telefone' },
    // { id: 'newsletter', title: 'newsletter' },
    // { id: 'id_regiao', title: 'id_regiao' },
    // { id: 'regiao', title: 'regiao' },
    // { id: 'nascimento', title: 'nascimento' },
    // { id: 'data_cadastro', title: 'data_cadastro' },
    // { id: 'data_alteracao', title: 'data_alteracao' },
  ],
});

export default async function Write(objects: any) {
  await csvWriter.writeRecords(objects);
  console.log('done');
}
