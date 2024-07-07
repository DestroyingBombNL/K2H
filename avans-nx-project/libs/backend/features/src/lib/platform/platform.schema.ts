import { IPlatform } from "@avans-nx-project/shared/api";
import { IsMongoId } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Console } from "@avans-nx-project/shared/api";

export type PlatformDocument = Platform & Document;

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

export const PlatformSchema = SchemaFactory.createForClass(Platform);