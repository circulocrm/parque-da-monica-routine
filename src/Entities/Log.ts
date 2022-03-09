export default interface ILog {
  connected: boolean;
  text: string;
  date: string;
  table: string;
  success: boolean;
  created_at?: Date;
}
