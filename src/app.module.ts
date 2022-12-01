import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./model/users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./model/users/user";
import { TasksModule } from './model/tasks/tasks.module';
import { CategoriesModule } from './model/categories/categories.module';
import { Task } from "./model/tasks/task";
import { Category } from "./model/categories/category";
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "abc",
    database: "tiao",
    entities: [User, Task, Category],
    synchronize: true
  }), UsersModule, TasksModule, CategoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
