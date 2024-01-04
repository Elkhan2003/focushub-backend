import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
	imports: [
		CrudModule,
		TaskModule,
		AuthModule,
		PassportModule.register({ session: true })
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
