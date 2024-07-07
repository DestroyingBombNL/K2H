import { IUser, Organisation, Permission } from "@avans-nx-project/shared/api";
import { IsMongoId } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

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

export const UserSchema = SchemaFactory.createForClass(User);