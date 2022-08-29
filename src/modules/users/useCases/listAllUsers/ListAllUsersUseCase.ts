import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] | string {
    const user = this.usersRepository.findById(user_id);
    if (!user.admin) {
      throw new Error("Use is not admin");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
