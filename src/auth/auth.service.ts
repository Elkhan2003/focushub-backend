import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Profile } from 'passport-google-oauth20';
import * as moment from 'moment';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async validateUser(profile: Profile) {
		try {
			const profileData = await this.prisma.user.findUnique({
				where: {
					login: profile._json.email
				}
			});
			if (!profileData) {
				return await this.prisma.user.create({
					data: {
						auth: 'Google',
						firstName: profile._json.given_name || '',
						lastName: profile._json.family_name || '',
						login: profile._json.email || '',
						password: '',
						photo: profile._json.picture || '',
						createdAt: moment().utcOffset(6).format('YYYY-MM-DD HH:mm:ss Z'),
						updatedAt: moment().utcOffset(6).format('YYYY-MM-DD HH:mm:ss Z')
					}
				});
			} else {
				return profileData;
			}
		} catch (err) {
			console.log(`${err}`);
		}
	}

	async findUser(id: number) {
		return this.prisma.user.findUnique({
			where: {
				id: id
			}
		});
	}
}
