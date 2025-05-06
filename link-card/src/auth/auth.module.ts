import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import jwtConfig from './config/jwt.config';
import refreshJwtConfig from './config/refresh-jwt.config';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { Kullanici } from 'src/Entities/kullanici.entity';
import { KullaniciService } from 'src/kullanici/kullanici.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshJwtConfig),
    PassportModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    TypeOrmModule.forFeature([Kullanici]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, KullaniciService],
  controllers: [AuthController],
})
export class AuthModule {}