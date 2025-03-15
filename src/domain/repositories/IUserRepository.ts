import {User} from "@domain/entities/User";

export interface IUserRepository{
    save(user:User): Promise<User>;
    findByName(email:string): Promise<User | null>;
    findById(id:number): Promise<User | null>
}