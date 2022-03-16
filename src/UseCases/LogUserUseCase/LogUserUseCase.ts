/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import IUser from '../../Entities/User';
import IUserRepositorie from '../../Repositories/User/UserRepositorie';

export default class LogUserUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private userRepository: IUserRepositorie,
  ) { }

  async execute(credentials: IUser): Promise<IUser> {
    const user = await this.userRepository.validate(credentials);
    return user;
  }
}
