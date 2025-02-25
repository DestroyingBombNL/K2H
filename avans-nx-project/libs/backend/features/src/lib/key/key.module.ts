import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Key, KeySchema } from './key.schema';
import { KeyController } from './key.controller';
import { KeyService } from './key.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Key.name, schema: KeySchema }
        ])
    ],
    controllers: [KeyController],
    providers: [KeyService, JwtService],
    exports: [KeyService]
})
export class KeyModule {}
