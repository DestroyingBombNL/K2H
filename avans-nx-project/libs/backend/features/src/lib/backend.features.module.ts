import { Module } from '@nestjs/common';
import { PlatformModule } from './platform/platform.module';
import { UserModule } from './user/user.module';
import { KeyModule } from './key/key.module';
import { GameModule } from './game/game.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [PlatformModule, UserModule, KeyModule, GameModule, AuthenticationModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class BackendFeaturesModule {}