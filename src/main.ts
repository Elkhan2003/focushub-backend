import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const PORT: any = process.env.PORT || 3000;
	app.setGlobalPrefix('/api/v1');
	app.use(
		session({
			secret: 'Elcho911∑å∂®∆√˜∆´ß∫¬∆å´ƒø˙¥ª•¶™£ƒ˙ˆ∆å∫˚¬®√',
			saveUninitialized: false,
			resave: false,
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7
			}
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
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
