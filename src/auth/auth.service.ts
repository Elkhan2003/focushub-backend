import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Profile } from 'passport-google-oauth20';
@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	validateUser(details: Profile) {
		console.log('AuthService');
		console.log(details);
	}
}
