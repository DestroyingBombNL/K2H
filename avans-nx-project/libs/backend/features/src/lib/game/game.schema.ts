import { Genre, IGame } from "@avans-nx-project/shared/api";
import { IsMongoId } from "class-validator";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

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

export const GameSchema = SchemaFactory.createForClass(Game);