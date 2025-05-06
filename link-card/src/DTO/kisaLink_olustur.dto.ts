import { InputType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType() // GraphQL input type
export class KisaLinkOlusturDto {
    @IsString()
    @Length(1, 1000)
    asilMetinAdi: string;

    @IsString()
    @Length(1, 100)
    kisaltmaToken: string;
}
