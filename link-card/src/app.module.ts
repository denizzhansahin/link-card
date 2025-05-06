import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KullaniciModule } from './kullanici/kullanici.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kullanici } from './Entities/kullanici.entity';
import { KisiselLink } from './Entities/kisiselLink.entity';
import { KurumsalLink } from './Entities/kurumsalLink.entity';
import { Link } from './Entities/kisalink.entity';
import { KullaniciGraphQl } from './GraphQl/KullaniciQuery';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { AuthModule } from './auth/auth.module';
import { LinkIslemlerModule } from './link_islemler/link_islemler.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      context: ({ req, res }) => ({ req, res }),
      playground: true, // GraphQL Playground'u etkinleştir
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      //logging: true,
      entities: [Kullanici,KisiselLink,KurumsalLink,Link],
    }),
    KullaniciModule,
    LinkIslemlerModule],
  controllers: [AppController],
  providers: [AppService,KullaniciGraphQl
    ,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, // Tüm endpoint'leri JWT ile koru
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Rol tabanlı koruma
    },
  ],
})
export class AppModule {}
