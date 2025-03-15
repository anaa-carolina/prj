import { Pool } from 'mysql2';
import { IUserRepository } from "@domain/repositories/IUserRepository";
import { User } from "@domain/entities/User";
import { Database } from "infrasctructure/config/Database";
import { error } from 'console';

export class UserRepository implements IUserRepository{
    private pool = Database.getConnection();

    async save(user: User): Promise<User> {
        const result = await this.pool.execute(
            "insert into users (name, email) values(?, ?)", [user.name, user.email]
        );

        console.log('!# save result: ', result);

        const insertId = (result as any).insertId;
        user.id = insertId;
        return user;
    }
    findByName(email: string): Promise<User | null> {
        throw new Error("Method not implemented. ");
    }

    findById(id: number): Promise<User | null> {
        throw new Error("Method not implemented. ");
    }

}