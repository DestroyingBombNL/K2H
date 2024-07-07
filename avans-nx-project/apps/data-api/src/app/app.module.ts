import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendFeaturesModule } from '@avans-nx-project/backend/features';
import { environment } from '@avans-nx-project/shared/util-env';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BackendFeaturesModule, MongooseModule.forRoot(environment.mongoDbConnectionString, {
    dbName: 'K2H',
    connectionFactory: (connection) => {
      Logger.log(`Connected to ${connection.name} at ${connection.host}:${connection.port}`);
      return connection;
    },
    connectionErrorFactory: (error) => {
      Logger.log(`Connection error occurred: ${error}`);
      return error;
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
