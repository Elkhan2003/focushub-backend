import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const PORT: any = process.env.PORT || 3000;
	try {
		await app.listen(PORT, '0.0.0.0');

		console.log(`${new Date()}`);
		console.log('server running at: http://localhost:' + PORT);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}
bootstrap();
