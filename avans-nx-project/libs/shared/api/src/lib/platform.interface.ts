import { Console } from './console.enum'

export interface IPlatform {
    _id: string,
    name: string,
    console: Console[],
    rating: number,
    releaseYear: string,
    imageLink: string
}