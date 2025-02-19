import { Injectable } from '@nestjs/common';

export type Todo = {
  id: number;
  subject: string;
};

const todoList: Todo[] = [
  {
    id: 1,
    subject: 'study',
  },
];

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todoList;
  }

  getTodo(id: number): Todo | object {
    return todoList.find((t) => t.id == id) ?? {};
  }
}
