import {
  Controller,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo as tTodo, CreateTodo as iCreateTodo } from './todo.dto';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getTodos(
    @Query('id') id?: number,
    @Query('limit') limit: number = 10,
    @Query('skip') skip: number = 0,
  ): tTodo[] {
    return this.todoService.getTodos(id, limit, skip);
  }

  @Get(':id')
  getTodo(@Param() params: { id: number }): tTodo | object {
    const { id } = params;
    return this.todoService.getTodo(id);
  }

  @Post()
  createTodo(@Body() params: iCreateTodo): void {
    const { subject } = params;
    this.todoService.createTodo(subject);
    return;
  }
}
