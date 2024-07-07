import { IGame } from '@avans-nx-project/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
//import { AuthGuard } from '../auth/auth.guards';

@Controller('game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post('')
    //@UseGuards(AuthGuard)
    create(@Body() game: IGame) {
        return this.gameService.create(game);
    }

    @Get(':id')
    //@UseGuards(AuthGuard)
    read(@Param('id') gameId: string): Promise<IGame | null> {
        return this.gameService.read(gameId);
    }

    @Get('')
    //@UseGuards(AuthGuard)
    readAll(): Promise<IGame[]> {
        return this.gameService.readAll();
    }

    @Put('')
    //@UseGuards(AuthGuard)
    upsert(@Body() game: IGame) {
        return this.gameService.upsert(game);
    }

    @Delete(':id')
    //@UseGuards(AuthGuard)
    delete(@Param('id') gameId: string) {
        return this.gameService.delete(gameId);
    }
}