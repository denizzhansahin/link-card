import { PartialType } from '@nestjs/mapped-types';
import { KisiselLinkOlusturDto } from './kisiselLink_olustur.dto';

export class KisiselLinkGuncelleDto extends PartialType(KisiselLinkOlusturDto) {}
