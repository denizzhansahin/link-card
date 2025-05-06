import { PartialType } from '@nestjs/mapped-types';
import { KurumsalLinkOlusturDto } from './kurumsalLink_olustur.dto';

export class KurumsalLinkGuncelleDto extends PartialType(KurumsalLinkOlusturDto) {}
