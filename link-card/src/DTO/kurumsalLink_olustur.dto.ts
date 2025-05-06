import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType() // GraphQL input type
export class KurumsalLinkOlusturDto {
    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isEpostasi?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isWebSitesi?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isyeriWebSitesi?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isYeriAdresi?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isTelefonu?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isYeriTelefon?: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    isYeriEposta?: string;
}
