import { PartialType } from '@nestjs/mapped-types';
import { KisaLinkOlusturDto } from './kisaLink_olustur.dto';

export class KisaLinkGuncelleDto extends PartialType(KisaLinkOlusturDto) {}
