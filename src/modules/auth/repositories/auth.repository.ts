import {EntityRepository, getConnection, Repository} from 'typeorm';
import {AccountEntity} from 'src/modules/account/account.entity';
import {SignInDto} from '../dto/sign-in.dto';

@EntityRepository(AccountEntity)
export class AuthRepository extends Repository<AccountEntity> {
    async validateUserPassword(signInCredentialsDto: SignInDto): Promise<AccountEntity> {
        const {username, password} = signInCredentialsDto;

        const account = await this.findOne({username});

        if (!account) return null;

        const isCorrectPassword = await account.validatePassword(password);
        const id = account.id;

        if (isCorrectPassword) {
            account.otpassword = '';
            const accountUpdate = await getConnection()
                .createQueryBuilder()
                .update(AccountEntity)
                .set({otpassword: ''})
                .where('id = :id', {id})
                .execute();
            return account;
        } else {
            if (account?.otpassword && password === account.otpassword) {
                return account;
            } else {
                return null;
            }
        }
    }
}