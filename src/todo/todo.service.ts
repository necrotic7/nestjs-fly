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
  {
    id: 2,
    subject: 'work',
  },
  {
    id: 3,
    subject: 'sport',
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
}
