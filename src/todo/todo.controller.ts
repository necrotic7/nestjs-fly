import { Controller, Get, Param } from '@nestjs/common';
import { TodoService, Todo as tTodo } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos(): tTodo[] {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param() params: { id: number }): tTodo | object {
    const { id } = params;
    return this.todoService.getTodo(id);
  }
}
