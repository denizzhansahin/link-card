import { Module } from '@nestjs/common';
import { LinkIslemlerService } from './link_islemler.service';

@Module({
  providers: [LinkIslemlerService]
})
export class LinkIslemlerModule {}
