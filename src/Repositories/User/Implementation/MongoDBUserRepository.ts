import User from '../../../Entities/User';
import IUserRepositorie from '../UserRepositorie';

import UserModel from '../../../scheema/UserModel'

export default class MongoDBUserRepository implements IUserRepositorie {
  async validate(credentials: User): Promise<User> {
    const { email, password } = credentials;
    const user = await UserModel.findOne({ email }) as User

    if (!user) throw new Error('User not found');

    if (user.password !== password) throw new Error('Invalid credentials');

    return user;
  }
}
