import { Module } from '@nestjs/common';
import { KullaniciService } from './kullanici.service';

@Module({
  providers: [KullaniciService]
})
export class KullaniciModule {}
