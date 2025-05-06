import { IsOptional, IsString } from 'class-validator';

export class KisiselLinkOlusturDto {
    @IsOptional()
    @IsString()
    instagram?: string;

    @IsOptional()
    @IsString()
    facebook?: string;

    @IsOptional()
    @IsString()
    x?: string;

    @IsOptional()
    @IsString()
    spotify?: string;

    @IsOptional()
    @IsString()
    youtube?: string;

    @IsOptional()
    @IsString()
    linkedin?: string;

    @IsOptional()
    @IsString()
    reddit?: string;

    @IsOptional()
    @IsString()
    vk?: string;

    @IsOptional()
    @IsString()
    medium?: string;

    @IsOptional()
    @IsString()
    webSite?: string;

    @IsOptional()
    @IsString()
    favoriMuzikVideom?: string;

    @IsOptional()
    @IsString()
    youtubeList?: string;

    @IsOptional()
    @IsString()
    youtubeVideo?: string;

    @IsOptional()
    @IsString()
    blogSitem?: string;

    @IsOptional()
    @IsString()
    spotifyList?: string;

    @IsOptional()
    @IsString()
    alisverisListem?: string;
}
