import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(typeORMConfig), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
