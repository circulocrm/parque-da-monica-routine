/* eslint-disable no-unused-vars */
import 'express-session';
import IUser from '../Entities/User';

declare module 'express-session' {
  interface SessionData {
    user: IUser;
  }
}
