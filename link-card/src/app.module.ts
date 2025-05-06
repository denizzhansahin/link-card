import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KullaniciModule } from './kullanici/kullanici.module';

@Module({
  imports: [KullaniciModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
