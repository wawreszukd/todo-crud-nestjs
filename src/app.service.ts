import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Todo) private repo: Repository<Todo>) {}

  getAllTodos(): Promise<Todo[] | null> {
    return this.repo.find();
  }

  getOneTodo(id: number): Promise<Todo | null> {
    return this.repo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }

  async create(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = this.repo.create(todo);
    return this.repo.save(newTodo);
  }

  async update(id: number, todo: CreateTodoDto): Promise<Todo | null> {
    const updated = await this.repo.update(id, todo);
    if (updated.affected === 1) {
      return this.repo.findOneBy({ id });
    }
    throw new NotFoundException('Todo not found');
  }
}
