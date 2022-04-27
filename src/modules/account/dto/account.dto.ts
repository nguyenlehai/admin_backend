import { Exclude, Expose } from 'class-transformer';
import { AbstractDto } from '../../../common/dto/abstract.dto';

@Exclude()
export class AccountDto extends AbstractDto {
    @Expose()
    id: number;

    @Expose()
    username: string;

    @Expose()
    accountName: string;

    @Expose()
    otpassword: string;

    @Expose()
    companyId: string;
}
