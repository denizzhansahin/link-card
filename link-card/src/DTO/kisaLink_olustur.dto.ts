import { IsString, Length } from 'class-validator';

export class KisaLinkOlusturDto {
    @IsString()
    @Length(1, 255)
    asilMetinAdi: string;

    @IsString()
    @Length(1, 100)
    kisaltmaToken: string;
}
