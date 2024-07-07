import { IPlatform } from '@avans-nx-project/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PlatformService } from './platform.service';
//import { AuthGuard } from '../auth/auth.guards';

@Controller('platform')
export class PlatformController {
    constructor(private platformService: PlatformService) {}

    @Post('')
    //@UseGuards(AuthGuard)
    create(@Body() platform: IPlatform) {
        return this.platformService.create(platform);
    }

    @Get(':id')
    //@UseGuards(AuthGuard)
    read(@Param('id') platformId: string): Promise<IPlatform | null> {
        return this.platformService.read(platformId);
    }

    @Get('')
    //@UseGuards(AuthGuard)
    readAll(): Promise<IPlatform[]> {
        return this.platformService.readAll();
    }

    @Put('')
    //@UseGuards(AuthGuard)
    upsert(@Body() platform: IPlatform) {
        return this.platformService.upsert(platform);
    }

    @Delete(':id')
    //@UseGuards(AuthGuard)
    delete(@Param('id') platformId: string) {
        return this.platformService.delete(platformId);
    }
}