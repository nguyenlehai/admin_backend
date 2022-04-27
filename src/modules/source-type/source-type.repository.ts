import {HttpStatus, InternalServerErrorException} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {EntityRepository, Repository} from 'typeorm';
import {SouceTypeEntity} from "./source-type.entity";
import {SourceTypeDto} from "./dto/source-type.dto";

@EntityRepository(SouceTypeEntity)
export class SourceTypeRepository extends Repository<SouceTypeEntity> {

    async getSourceType(sourceTypeDto: SourceTypeDto): Promise<SourceTypeDto[]> {

        const query = this.createQueryBuilder('source-types');

        try {
            const sourceType = await query.getMany();

            return plainToClass(SourceTypeDto, sourceType);
        } catch (error) {
            throw new InternalServerErrorException({message: 'ERROR', status: HttpStatus.INTERNAL_SERVER_ERROR});
        }
    }
}
