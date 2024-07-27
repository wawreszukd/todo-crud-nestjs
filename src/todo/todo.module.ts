// src/todo.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../todo.entity';
import { AppService } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class TodoModule {}
