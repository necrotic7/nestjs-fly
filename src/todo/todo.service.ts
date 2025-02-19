import { Injectable } from '@nestjs/common';
import { Todo } from './todo.dto';

const todoList: Todo[] = [
  {
    id: 1,
    subject: 'study',
  },
];

@Injectable()
export class TodoService {
  getTodos(id: number | undefined, limit: number, skip: number): Todo[] | [] {
    const filteredList = id ? todoList.filter((t) => t.id == id) : todoList;
    return filteredList.slice(skip, limit);
  }

  getTodo(id: number): Todo | object {
    return todoList.find((t) => t.id == id) ?? {};
  }

  createTodo(subject: string): void {
    todoList.push({
      id: todoList.length + 1,
      subject,
    });
    return;
  }
}
