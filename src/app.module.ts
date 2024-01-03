import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TaskModule } from './task/task.module';

@Module({
	imports: [DatabaseModule, CrudModule, TaskModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
