import { Organisation } from "./organisation.enum";
import { Permission } from "./permission.enum";

export interface IUser {
    _id: string,
    username: string,
    imageLink: string,
    firstName: string,
    lastName: string,
    email: string,
    phonenumber: string,
    password: string,
    country: string,
    state: string,
    birthday: Date,
    buyer: boolean,
    seller: boolean,
    permission: Permission,
    rating: number,
    organisation: Organisation
}