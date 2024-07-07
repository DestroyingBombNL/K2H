import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IGame, IKey, IPlatform, IUser } from "@avans-nx-project/shared/api";
import { KeyDocument, Key as KeyModel} from "./key.schema";

@Injectable()
export class KeyService {
    TAG = 'KeyService';
    
    constructor(
        @InjectModel(KeyModel.name) 
        private keyModel: Model<KeyDocument>
    ) {}

    async updateUser(user: IUser) {
      Logger.log('updateUser', this.TAG);
      await this.keyModel.updateMany(
        {'seller.id': user._id}, 
        {$set: { 'seller': user}}, 
        {upsert: true, new: true}
      ).exec();
      await this.keyModel.updateMany(
        {'buyer.id': user._id}, 
        {$set: { 'buyer': user}}, 
        {upsert: true, new: true}
      ).exec();
      return true;   
    }

    async readAllKeyPurchasedByUser(_id: string): Promise<IKey[]> {
      Logger.log('readAllKeyBoughtByUser', this.TAG);
      return this.keyModel.find({'buyer._id': _id}).exec();
    }

    async readAllKeySoldByUser(_id: string): Promise<IKey[]> {
      Logger.log('readAllKeySoldByUser', this.TAG);
      return this.keyModel.find({'seller._id': _id, 'buyer._id': {$exists: true }}).exec();
    }

    async readAllKeyLiveByUser(_id: string): Promise<IKey[]> {
      Logger.log('readAllKeyLiveByUser', this.TAG);
      return this.keyModel.find({'seller._id': _id, 'buyer._id': {$exists: false }}).exec();
    }

    //someone bought the key
    async purchaseKey(_keyId: string, user: IUser): Promise<IKey | null> {
      Logger.log('purchaseKey', this.TAG);
  
      const purchasedKey = await this.keyModel.findOneAndUpdate(
        { '_id': _keyId },
        { $set: { buyer: {_id: user._id, username: user.username, imageLink: user.imageLink, rating: user.rating }, buyDate: new Date() } },
        { upsert: true, new: true }
      ).exec();
    
      return purchasedKey;
    }

    //user got deleted
    deleteUser(_id: string) {
      Logger.log('deleteUser', this.TAG);
      return this.keyModel.deleteMany({ 'seller._id': _id, 'buyer._id': { $exists: false }}).exec();
    }

    //acually an update on key
    async createGame(_keyId: string, game: IGame): Promise<IKey | null> {
      Logger.log('Game_Create', this.TAG);
      return this.keyModel.findOneAndUpdate({'_id': _keyId}, {$push: { 'game': game}}, {upsert: true, new: true}).exec();
    }

    //used when making keys
    async readAllGame(): Promise<IGame[]> {
      Logger.log('Game_GetAll', this.TAG);
      const uniqueGames = await this.keyModel.aggregate([
        {
          $group: {
            _id: '$game.name',
            game: { $first: '$game' }
          }
        }
      ]).exec();
    
      return uniqueGames.map(({ _id, game }) => ({
        _id: _id,
        ...game.toObject()
      }));
    }

    //used by admin to update all games's info    
    async upsertAllGame(game: IGame): Promise<IGame[] | null> {
      Logger.log('Game_Upsert', this.TAG);
  
      await this.keyModel.updateMany(
        { 'game.name': game.name },
        { $set: { game: game } },
        { upsert: true }
      ).exec();

      return this.readAllGame();
    }

    //acually an update on key
    async createPlatform(_keyId: string, platform: IPlatform): Promise<IKey | null> {
      Logger.log('Platform_Create', this.TAG);
      return this.keyModel.findOneAndUpdate({'_id': _keyId}, {$push: { 'platform': platform}}, {upsert: true, new: true}).exec();
    }

    //used when making keys
    async readAllPlatform(): Promise<IPlatform[]> {
      Logger.log('Platform_GetAll', this.TAG);
      const uniquePlatforms = await this.keyModel.aggregate([
        {
          $group: {
            _id: '$platform.name',
            platform: { $first: '$platform' }
          }
        }
      ]).exec();
    
      return uniquePlatforms.map(({ _id, platform }) => ({
        _id: _id,
        ...platform.toObject()
      }));
    }

    //used by admin to update all platforms's info    
    async upsertAllPlatform(platform: IPlatform): Promise<IPlatform[] | null> {
      Logger.log('Platform_Upsert', this.TAG);
  
      await this.keyModel.updateMany(
        { 'platform.name': platform.name },
        { $set: { platform: platform } },
        { upsert: true }
      ).exec();

      return this.readAllPlatform();
    }

    async createKey(key: IKey): Promise<IKey | null> {
      Logger.log('Key_create', this.TAG);
      return this.keyModel.create(key);
    }

    readAllKey(): Promise<IKey[]> {
      Logger.log('Key_readAll', this.TAG);
      return this.keyModel.find().exec();
    }

    readAllAvailableKey(): Promise<IKey[]> {
      Logger.log('Key_readAllAvailable', this.TAG);
      return this.keyModel.find({ $or: [{ buyDate: { $exists: false } }, { buyDate: null }] }).exec();
    }

    async readOneKeyWithAllUniqueGame(): Promise<IKey[]> {
      Logger.log('Key_readAllUnique', this.TAG);
      
      const distinctAvailableGames = await this.keyModel.distinct('game.name', {
        $or: [{ buyDate: { $exists: false } }, { buyDate: null }]
      }).exec();

      const keys: IKey[] = [];
      for (const gameName of distinctAvailableGames) {
        const cheapestKey = await this.keyModel.findOne({
          'game.name': gameName,
          $or: [{ buyDate: { $exists: false } }, { buyDate: null }]
        }).sort({ price: 1 }).exec();
        if (cheapestKey) {
          keys.push(cheapestKey);
        }
      }
      return keys;
    }

    readAllAvailableKeyWithGame(gameName: string): Promise<IKey[]> {
      Logger.log('Key_readAllKeyWithGame', this.TAG);
      return this.keyModel.find({'game.name': gameName, buyDate: { $exists: false }}).exec();
    }

    upsertKey(key: IKey): Promise<IKey | null> {
        Logger.log('Key_upsert', this.TAG);
        return this.keyModel.findOneAndUpdate({'_id': key._id}, key, {upsert: true, new: true}).exec();
    }

    deleteKey(_keyId: string) {
        Logger.log('Key_delete', this.TAG);
        return this.keyModel.deleteOne({_id: _keyId}).exec();
    }
}