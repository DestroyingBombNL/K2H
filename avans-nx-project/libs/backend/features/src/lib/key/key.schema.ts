import { Genre, IGame, IKey, IPlatform, IUser, Organisation, Permission } from "@avans-nx-project/shared/api";
import { IsMongoId } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Console } from "@avans-nx-project/shared/api";
export type KeyDocument = Key & Document;

@Schema()
export class User implements IUser {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String,
        unique: true
    })
    username!: string;

    @Prop({
        required: false,
        type: String
    })
    firstName!: string;

    @Prop({
        required: false,
        type: String
    })
    lastName!: string;

    @Prop({
        required: false,
        type: String,
        unique: true
    })
    email!: string;

    @Prop({
        required: false,
        type: String,
        unique: true
    })
    phonenumber!: string;

    @Prop({
        required: false,
        type: String,
    })
    password!: string;

    @Prop({
        required: false,
        type: String
    })
    country!: string;

    @Prop({
        required: false,
        type: String
    })
    state!: string;

    @Prop({
        required: false,
        type: Date
    })
    birthday!: Date;

    @Prop({
        required: false,
        type: Boolean
    })
    buyer!: boolean;

    @Prop({
        required: false,
        type: Boolean
    })
    seller!: boolean;

    @Prop({
        required: true,
        type: String
    })
    imageLink!: string;

    @Prop({
        required: false,
        type: String
    })
    permission!: Permission;

    @Prop({
        required: true,
        type: Number
    })
    rating!: number;

    @Prop({
        required: false,
        type: String
    })
    organisation!: Organisation;
}

@Schema()
export class Game implements IGame {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String,
        unique: true
    })
    name!: string;

    @Prop({
        required: true,
        type: String
    })
    imageLink!: string;

    @Prop({
        required: true,
        type: String
    })
    trailerLink!: string;

    @Prop({
        required: true,
        type: String
    })
    developer!: string;

    @Prop({
        required: true,
        type: Number
    })
    storePrice!: number;

    @Prop({
        required: true,
        type: [String]
    })
    genres!: Genre[];

    @Prop({
        required: true,
        type: Number
    })
    rating!: number;

    @Prop({
        required: true,
        type: Date
    })
    releaseDate!: Date;
}

@Schema()
export class Platform implements IPlatform {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: true,
        type: String,
        unique: true
    })
    name!: string;

    @Prop({
        required: true,
        type: [String]
    })
    console!: Console[];

    @Prop({
        required: true,
        type: Number
    })
    rating!: number;

    @Prop({
        required: true,
        type: String
    })
    releaseYear!: string;

    @Prop({
        required: true,
        type: String
    })
    imageLink!: string;
}

@Schema()
export class Key implements IKey {
    @IsMongoId()
    _id!: string;

    @Prop({
        required: false,
        type: User
    })
    seller!: IUser;

    @Prop({
        required: false,
        type: User
    })
    buyer!: IUser;

    @Prop({
        required: false,
        type: Platform
    })
    platform!: IPlatform;

    @Prop({
        required: false,
        type: Game
    })
    game!: IGame;

    @Prop({
        required: false,
        type: Number
    })
    price!: number;

    @Prop({
        required: false,
        type: Number
    })
    discount!: number;

    @Prop({
        required: false,
        type: Date
    })
    offerDate!: Date;

    @Prop({
        required: false,
        type: Date
    })
    buyDate!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const GameSchema = SchemaFactory.createForClass(Game);
export const PlatformSchema = SchemaFactory.createForClass(Platform);
export const KeySchema = SchemaFactory.createForClass(Key);