import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "@avans-nx-project/shared/api";
import { UserDocument, User as UserModel} from "./user.schema";
import { KeyService } from "../key/key.service";

@Injectable()
export class UserService {
    TAG = 'UserService';
    
    constructor(
        @InjectModel(UserModel.name) 
        private userModel: Model<UserDocument>,
    ) {}

    async create(user: IUser): Promise<IUser | null> {
      Logger.log('User_Create', this.TAG);
      Logger.log(user, this.TAG);
      return this.userModel.create(user);
    }

    read(_userId: string) {
      Logger.log('User_Get', this.TAG);
      return this.userModel.findById(_userId).exec();
    }

    readWithEmail(email: string): Promise<IUser | null> {
      Logger.log('User_GetWithEmail', this.TAG);
      return this.userModel.findOne({'email': email}).exec();
    }

    readAll(): Promise<IUser[]> {
      Logger.log('User_GetAll', this.TAG);
      return this.userModel.find().exec();
    }

    upsert(user: IUser): Promise<IUser | null> {
        Logger.log('User_Upsert', this.TAG);
        return this.userModel.findOneAndUpdate({'_id': user._id}, user, {upsert: true, new: true}).exec();
    }

    delete(_userId: string) {
        Logger.log('User_Delete', this.TAG);
        return this.userModel.deleteOne({_id: _userId}).exec();
    }
}