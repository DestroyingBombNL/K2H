import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
    async createPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(11);
        return await bcrypt.hash(password, salt);
    }

    async checkPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }
}