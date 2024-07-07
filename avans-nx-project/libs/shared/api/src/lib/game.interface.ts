import { Genre } from './genre.enum';

export interface IGame {
    _id: string;
    name: string;
    imageLink: string;
    trailerLink: string;
    developer: string;
    storePrice: number;
    genres: Genre[];
    rating: number;
    releaseDate: Date;
}