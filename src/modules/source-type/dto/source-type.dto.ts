import { Exclude, Expose } from 'class-transformer';
import { AbstractDto } from '../../../common/dto/abstract.dto';

@Exclude()
export class SourceTypeDto extends AbstractDto {
    @Expose()
    code: number;

    @Expose()
    name: string;
}
