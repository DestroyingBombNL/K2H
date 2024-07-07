import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IUser } from '@avans-nx-project/shared/api';
import { JwtService } from '@nestjs/jwt';
import { Public } from './decorators';
import { AuthenticationGuard } from './authentication.guards';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly userService: UserService, private readonly authService: AuthenticationService, private readonly jwtService: JwtService) {}

    @Public()
    @Post('login')
    async login(@Body()body: IUser) {
        const user = await this.userService.readWithEmail(body.email);
        if (!user || !user.password || user.password !== body.password) {
            return 'Credentials are incorrect!';
        } else {
            const token = await this.jwtService.signAsync({user: user}, {privateKey: 'sngkSDFmnlSDSDGlkFBDFL'});
            return {
                user,
                token
            };
        }
    }

    @Public()
    @Get('validate')
    @UseGuards(AuthenticationGuard)
    validateToken() {
        Logger.log(`validate token`);
        return;
    }
}
