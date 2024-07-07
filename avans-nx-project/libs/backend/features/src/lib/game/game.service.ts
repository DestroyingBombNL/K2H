import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Console, IGame } from "@avans-nx-project/shared/api";
import { GameDocument, Game as GameModel} from "./game.schema";

@Injectable()
export class GameService {
    TAG = 'GameService';
    
    constructor(
        @InjectModel(GameModel.name) 
        private gameModel: Model<GameDocument>
    ) {}

    async create(game: IGame): Promise<IGame | null> {
      Logger.log('Game_Create', this.TAG);
      return this.gameModel.create(game);
    }

    read(gameId: string) {
      Logger.log('Game_Get', this.TAG);
      return this.gameModel.findById(gameId).exec();
    }

    readAll(): Promise<IGame[]> {
      Logger.log('Game_GetAll', this.TAG);
      return this.gameModel.find().exec();
    }

    upsert(game: IGame): Promise<IGame | null> {
        Logger.log('Game_Upsert', this.TAG);
        return this.gameModel.findOneAndUpdate({'_id': game._id}, game, {upsert: true, new: true}).exec();
    }

    delete(gameId: string) {
        Logger.log('Game_Delete', this.TAG);
        return this.gameModel.deleteOne({_id: gameId}).exec();
    }
}