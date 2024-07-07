import { IGame, IKey, IPlatform, IUser } from '@avans-nx-project/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { KeyService } from './key.service';
//import { AuthGuard } from '../auth/auth.guards';

@Controller('key')
export class KeyController {
    constructor(private keyService: KeyService) {}

    @Put('user')
    //@UseGuards(AuthGuard)
    updateUser(@Body() user: IUser) {
        return this.keyService.updateUser(user);
    }

    @Get('user/purchased/:id')
    //@UseGuards(AuthGuard)
    readAllKeyPurchasedByUser(@Param('id') _id: string): Promise<IKey[]> {
        return this.keyService.readAllKeyPurchasedByUser(_id);
    }

    @Get('user/sold/:id')
    readAllKeySoldByUser(@Param('id') _id: string): Promise<IKey[]> {
        return this.keyService.readAllKeySoldByUser(_id);
    }

    @Get('user/live/:id')
    readAllKeyLiveByUser(@Param('id') _id: string): Promise<IKey[]> {
        return this.keyService.readAllKeyLiveByUser(_id);
    }

    @Put('user/:id')
    //@UseGuards(AuthGuard)
    purchaseKey(@Param('id') _keyId: string, @Body() user: IUser): Promise<IKey | null> {
        return this.keyService.purchaseKey(_keyId, user);
    }

    @Delete('user/:id')
    //@UseGuards(AuthGuard)
    deleteUser(@Param('id') _id: string) {
        return this.keyService.deleteUser(_id);
    }

    @Post('game/:id')
    //@UseGuards(AuthGuard)
    createGame(@Param('id') _keyId: string, @Body() game: IGame): Promise<IKey | null> {
        return this.keyService.createGame(_keyId, game);
    }

    @Get('game')
    //@UseGuards(AuthGuard)
    readAllGame(): Promise<IGame[]> {
        return this.keyService.readAllGame();
    }

    @Put('game')
    //@UseGuards(AuthGuard)
    upsertAllGame(@Body() game: IGame): Promise<IGame[] | null> {
        return this.keyService.upsertAllGame(game);
    }

    @Post('platform/:id')
    //@UseGuards(AuthGuard)
    createPlatform(@Param('id') _keyId: string, @Body() platform: IPlatform): Promise<IKey | null> {
        return this.keyService.createPlatform(_keyId, platform);
    }

    @Get('platform')
    //@UseGuards(AuthGuard)
    readAllPlatform(): Promise<IPlatform[]> {
        return this.keyService.readAllPlatform();
    }

    @Put('platform')
    //@UseGuards(AuthGuard)
    upsertAllPlatform(@Body() platform: IPlatform): Promise<IPlatform[] | null> {
        return this.keyService.upsertAllPlatform(platform);
    }

    @Post('')
    //@UseGuards(AuthGuard)
    createKey(@Body() key: IKey) {
        return this.keyService.createKey(key);
    }

    @Get('')
    //@UseGuards(AuthGuard)
    readAllKey(): Promise<IKey[]> {
        return this.keyService.readAllKey();
    }

    @Get('all')
    //@UseGuards(AuthGuard)
    readOneKeyWithAllUniqueGame(): Promise<IKey[]> {
        return this.keyService.readOneKeyWithAllUniqueGame();
    }

    @Get('all/:gameName')
    //@UseGuards(AuthGuard)
    readAllAvailableKeyWithGame(@Param('gameName') gameName: string): Promise<IKey[]> {
        return this.keyService.readAllAvailableKeyWithGame(gameName);
    }

    @Put('')
    //@UseGuards(AuthGuard)
    upsertKey(@Body() key: IKey) {
        return this.keyService.upsertKey(key);
    }

    @Delete(':id')
    //@UseGuards(AuthGuard)
    deleteKey(@Param('id') keyId: string) {
        return this.keyService.deleteKey(keyId);
    }
}