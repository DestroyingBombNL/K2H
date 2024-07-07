import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Platform, PlatformSchema } from './platform.schema';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Platform.name, schema: PlatformSchema }
        ])
    ],
    controllers: [PlatformController],
    providers: [PlatformService, JwtService],
    exports: [PlatformService]
})
export class PlatformModule {}
