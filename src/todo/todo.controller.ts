import {
  Controller,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TodoService, Todo as tTodo } from './todo.service';

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
}
