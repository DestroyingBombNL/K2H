import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminGuard, AuthenticationGuard } from './authentication.guards';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [
    AuthenticationController
  ],
  imports: [UserModule],
  providers: [JwtService, AuthenticationGuard, AdminGuard, AuthenticationService],
})
export class AuthenticationModule {}
