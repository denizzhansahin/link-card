import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length, IsOptional, IsUUID } from 'class-validator';

@InputType() // GraphQL input type
export class KisaLinkOlusturDto {
    @Field()
    @IsString()
    @Length(1, 1000)
    asilMetinAdi: string;

    @Field()
    @IsString()
    @Length(1, 100)
    kisaltmaToken: string;

    @Field({ nullable: true }) // Link bir kullanıcıya ait olmayabilir (genel linkler için)
    @IsOptional()
    @IsUUID()
    kullaniciId?: string; // Bu linkin sahibi olan kullanıcının ID'si
}