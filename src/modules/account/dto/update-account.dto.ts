import { IsNotEmpty, IsString } from 'class-validator';
import { AbstractDto } from '../../../common/dto/abstract.dto';

export class UpdateAccountDto extends AbstractDto {
    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
