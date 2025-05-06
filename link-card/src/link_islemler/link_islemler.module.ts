import { Module } from '@nestjs/common';
import { LinkIslemlerService } from './link_islemler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kullanici } from 'src/Entities/kullanici.entity';
import { KisiselLink } from 'src/Entities/kisiselLink.entity';
import { KurumsalLink } from 'src/Entities/kurumsalLink.entity';
import { Link } from 'src/Entities/kisalink.entity';

@Module({
  providers: [LinkIslemlerService],
  imports:[
      TypeOrmModule.forFeature([Kullanici,KisiselLink,KurumsalLink,Link]),
    ]
})
export class LinkIslemlerModule {}
