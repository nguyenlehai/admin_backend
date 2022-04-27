import {HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {SourceTypeRepository} from "./source-type.repository";
import {SourceTypeDto} from "./dto/source-type.dto";

@Injectable()
export class SourceTypeService {
    constructor(
        @InjectRepository(SourceTypeRepository) private sourceTypeRepository: SourceTypeRepository,
    ) {
    }

    async getSourceType(sourceTypeDto: SourceTypeDto): Promise<any> {
        return {
            companies: await this.sourceTypeRepository.getSourceType(sourceTypeDto),
            message: 'SUCCESS',
            status: HttpStatus.OK,
        };
    }
}
