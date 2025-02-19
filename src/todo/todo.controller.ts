import { Controller, Get, Param, Query } from '@nestjs/common';
import { TodoService, Todo as tTodo } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos(
    @Query() params: { id?: number; limit?: number; skip?: number },
  ): tTodo[] {
    const { id, limit = 10, skip = 0 } = params;
    return this.todoService.getTodos(id, limit, skip);
  }

  @Get(':id')
  getTodo(@Param() params: { id: number }): tTodo | object {
    const { id } = params;
    return this.todoService.getTodo(id);
  }
}
