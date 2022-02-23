/* eslint-disable no-unused-vars */
export interface IOptions {
  host: string;
  port: number;
  timeout: number;
}

export interface IAuth {
  user: string;
  pass: string;
}

export default interface IVPNProvider {
  connect(options: IOptions, auth: IAuth): boolean;
  disconnect(): boolean;
};
