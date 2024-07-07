import { IUser } from '@avans-nx-project/shared/api';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
//import { AuthGuard } from '../auth/auth.guards';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('')
    //@UseGuards(AuthGuard)
    create(@Body() user: IUser) {
        return this.userService.create(user);
    }

    @Get(':id')
    //@UseGuards(AuthGuard)
    read(@Param('id') userId: string): Promise<IUser | null> {
        return this.userService.read(userId);
    }

    @Get('')
    //@UseGuards(AuthGuard)
    readAll(): Promise<IUser[]> {
        return this.userService.readAll();
    }

    @Put('')
    //@UseGuards(AuthGuard)
    upsert(@Body() user: IUser) {
        return this.userService.upsert(user);
    }

    @Delete(':id')
    //@UseGuards(AuthGuard)
    delete(@Param('id') userId: string) {
        return this.userService.delete(userId);
    }
}