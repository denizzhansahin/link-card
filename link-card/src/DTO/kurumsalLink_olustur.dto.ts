import { IsOptional, IsString } from 'class-validator';

export class KurumsalLinkOlusturDto {
    @IsOptional()
    @IsString()
    isEpostasi?: string;

    @IsOptional()
    @IsString()
    isWebSitesi?: string;

    @IsOptional()
    @IsString()
    isyeriWebSitesi?: string;

    @IsOptional()
    @IsString()
    isYeriAdresi?: string;

    @IsOptional()
    @IsString()
    isTelefonu?: string;

    @IsOptional()
    @IsString()
    isYeriTelefon?: string;

    @IsOptional()
    @IsString()
    isYeriEposta?: string;
}
