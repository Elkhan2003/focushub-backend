import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TaskModule } from './task/task.module';

@Module({
	imports: [CrudModule, TaskModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
