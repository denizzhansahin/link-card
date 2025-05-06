import { PartialType } from '@nestjs/mapped-types';
import { KullaniciOlusturDto } from './kullanici_olustur.dto';

export class KullaniciGuncelleDto extends PartialType(KullaniciOlusturDto) {}
