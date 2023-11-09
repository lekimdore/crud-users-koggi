import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ICreateUSer } from '@shared/types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: ICreateUSer) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('sites/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  /* @Post()
  create(@Body() createUserDto: { name: string; email: string }) {
    return this.usersService.create(createUserDto);
  }

  @Put('sites/:id')
  update(
    @Param('id') id: string,
    @Body() updateSiteDto: { name: string; technology: string }
  ) {
    return this.usersService.update(id, updateSiteDto);
  }

  @Delete('sites/:id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  } */
}
