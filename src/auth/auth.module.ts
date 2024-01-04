import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module';
import { GoogleStrategy } from './utils/GoogleStrategy';

@Module({
	imports: [DatabaseModule],
	controllers: [AuthController],
	providers: [
		GoogleStrategy,
		{
			provide: 'AUTH_SERVICE',
			useClass: AuthService
		}
	]
})
export class AuthModule {}
