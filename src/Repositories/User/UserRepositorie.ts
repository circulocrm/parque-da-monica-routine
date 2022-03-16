/* eslint-disable no-unused-vars */
import IUser from '../../Entities/User';

export default interface IUserRepositorie {
  validate(user: IUser): Promise<IUser>;
}
