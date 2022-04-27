import {Body, Controller, Get, Headers, Param, Post, Put, Query, UseGuards, ValidationPipe} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AccountService } from './account.service';
import { AccountsFilterDto } from './dto/accounts-filter.dto';
import { CreateAccountDto } from './dto/create.dto';
import {UpdateAccountDto} from "./dto/update-account.dto";

@Controller('accounts')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @UseGuards(AuthGuard())
    @Get('/')
    getAccountsByFilter(@Headers() headers, @Query(ValidationPipe) accountsfilterDto: AccountsFilterDto): Promise<any> {
        return this.accountService.getAccountsByFilter(headers, accountsfilterDto);
    }

    @Post('/')
    createAccount(@Body(ValidationPipe) createAccountDto: CreateAccountDto): Promise<any> {
        return this.accountService.createAccount(createAccountDto);
    }

    @Put('/:id')
    updateMemo(@Body(ValidationPipe) updateAccountDto: UpdateAccountDto, @Param('id') id): Promise<any> {
        return this.accountService.updateAccount(updateAccountDto, id);
    }
}
