import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User | string {
    const user = this.usersRepository.findByEmail(email);
    if (!email || !name) {
      throw new Error("Email and name are mandatory fields");
    } else if (user) {
      throw new Error("User already exists");
    } else {
      return this.usersRepository.create({ email, name });
    }
  }
}

export { CreateUserUseCase };
