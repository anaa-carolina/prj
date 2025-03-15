import { IUserRepository } from "@domain/repositories/IUserRepository";
import { User } from "@domain/entities/User";

export class CreateUserUserCase {
    constructor(private UserRepository: IUserRepository ){}

    async execute(name: string, email:string): Promise<User> {
        //TODO: Validar o e-mail
        const user = new User(name, email);

        return await this.UserRepository.save(user);
    }
}