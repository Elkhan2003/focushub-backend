import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [CrudModule, TaskModule, AuthModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
