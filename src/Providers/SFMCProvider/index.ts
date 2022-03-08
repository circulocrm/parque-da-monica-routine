export default interface ISFMCProvider {
  // eslint-disable-next-line no-unused-vars
  addToTable(tableKey: string, tableData?: {}): Promise<boolean>;
}
