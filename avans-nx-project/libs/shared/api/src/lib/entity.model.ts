export abstract class Entity {
    readonly _id: string;

    constructor(_id: string) {
        this._id = _id;
    }
}
