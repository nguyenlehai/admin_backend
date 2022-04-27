import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from '../auth/auth.module';
import {SourceTypeRepository} from "./source-type.repository";
import {SourceTypeController} from "./source-type.controller";
import {SourceTypeService} from "./source-type.service";

@Module({
    imports: [TypeOrmModule.forFeature([SourceTypeRepository]), AuthModule],
    controllers: [SourceTypeController],
    providers: [SourceTypeService],
})
export class SourceTypeModule {
}
