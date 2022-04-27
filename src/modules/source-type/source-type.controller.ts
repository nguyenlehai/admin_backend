import {Controller, Get, Query, ValidationPipe} from '@nestjs/common';
import {SourceTypeDto} from './dto/source-type.dto';
import {SourceTypeService} from "./source-type.service";

@Controller('source-types')
export class SourceTypeController {
    constructor(private sourceTypeService: SourceTypeService) {
    }

    @Get('/')
    getSourceType(@Query(ValidationPipe) sourceTypeDto: SourceTypeDto): Promise<any> {
        return this.sourceTypeService.getSourceType(sourceTypeDto);
    }
}
