import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';
// import { TypeOrmModule } from './typeorm/typeorm.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './typeorm/datasource.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    UserModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }), ,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
