import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllTodos() {
    return await this.appService.getAllTodos();
  }
  @Get(':id')
  async getOneTodo(@Param('id') id: number) {
    return await this.appService.getOneTodo(id);
  }
  @Post()
  async create(@Body() todo: CreateTodoDto) {
    return await this.appService.create(todo);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.appService.remove(id);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() todo: CreateTodoDto) {
    return await this.appService.update(id, todo);
  }
}
