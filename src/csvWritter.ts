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
  ],
});

export default async function Write(objects: any) {
  await csvWriter.writeRecords(objects);
}
