import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
	constructor(
		@Inject('AUTH_SERVICE') private readonly authService: AuthService
	) {
		super({
			clientID: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			callbackURL:
				process.env.NODE_ENV === 'development'
					? `${process.env.BACKEND_BASE_URL_DEV}/api/v1/auth/callback/google`
					: `${process.env.BACKEND_BASE_URL_PROD}/api/v1/auth/callback/google`,
			scope: ['profile', 'email']
		});
	}

	async validate(accessToken: string, refreshToken: string, profile: Profile) {
		const user = await this.authService.validateUser(profile);
		console.log(user);
		return user || null;
	}
}
