import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Game, GameSchema } from './game.schema';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Game.name, schema: GameSchema }
        ])
    ],
    controllers: [GameController],
    providers: [GameService, JwtService],
    exports: [GameService]
})
export class GameModule {}
