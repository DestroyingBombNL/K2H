import { IGame } from "./game.interface";
import { IPlatform } from "./platform.interface";
import { IUser } from "./user.interface";

export interface IKey {
    _id: string,
    seller: IUser,
    buyer: IUser,
    platform: IPlatform,
    game: IGame,
    price: number,
    discount: number,
    offerDate: Date
    buyDate: Date
}