"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const passport = require("passport");
const client_1 = require("@prisma/client");
const prisma_session_store_1 = require("@quixo3/prisma-session-store");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://localhost:5173',
            'https://focushub.vercel.app'
        ],
        credentials: true
    });
    const PORT = process.env.PORT || 3000;
    app.setGlobalPrefix('/api/v1');
    app.use(session({
        secret: 'Elcho911∑å∂®∆√˜∆´ß∫¬∆å´ƒø˙¥ª•¶™£ƒ˙ˆ∆å∫˚¬®√',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        },
        store: new prisma_session_store_1.PrismaSessionStore(new client_1.PrismaClient(), {
            checkPeriod: 2 * 60 * 1000,
            dbRecordIdIsSessionId: true,
            dbRecordIdFunction: undefined
        })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    try {
        await app.listen(PORT, '0.0.0.0');
        console.log(`${new Date()}`);
        console.log('server running at: http://localhost:' + PORT);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map