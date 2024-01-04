import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
	@Get('login/google')
	@UseGuards(GoogleAuthGuard)
	handleLogin() {
		return { message: 'Successfully' };
	}

	@Get('callback/google')
	@UseGuards(GoogleAuthGuard)
	handleRedirect() {
		return { message: 'OK' };
	}
}
