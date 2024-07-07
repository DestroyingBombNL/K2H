import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Console, IPlatform } from "@avans-nx-project/shared/api";
import { PlatformDocument, Platform as PlatformModel} from "./platform.schema";

@Injectable()
export class PlatformService {
    TAG = 'PlatformService';
    
    constructor(
        @InjectModel(PlatformModel.name) 
        private platformModel: Model<PlatformDocument>
    ) {}

    async create(platform: IPlatform): Promise<IPlatform | null> {
      Logger.log('Platform_Create', this.TAG);
      return this.platformModel.create(platform);
    }

    read(platformId: string) {
      Logger.log('Platform_Get', this.TAG);
      return this.platformModel.findById(platformId).exec();
    }

    readAll(): Promise<IPlatform[]> {
      Logger.log('Platform_GetAll', this.TAG);
      return this.platformModel.find().exec();
    }

    upsert(platform: IPlatform): Promise<IPlatform | null> {
        Logger.log('Platform_Upsert', this.TAG);
        return this.platformModel.findOneAndUpdate({'_id': platform._id}, platform, {upsert: true, new: true}).exec();
    }

    delete(platformId: string) {
        Logger.log('Platform_Delete', this.TAG);
        return this.platformModel.deleteOne({_id: platformId}).exec();
    }
}