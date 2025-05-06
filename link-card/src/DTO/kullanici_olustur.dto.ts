import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class KullaniciOlusturDto {
    @IsString()
    @Length(1, 50)
    isim: string;

    @IsString()
    @Length(1, 50)
    soyisim: string;

    @IsString()
    @Length(1, 50)
    nickname: string

    @IsEmail()
    eposta: string;

    @IsString()
    sifre: string;

    @IsOptional()
    @IsString()
    ulke?: string;

    @IsOptional()
    @IsString()
    fotograf?: string;
}
