"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3000;
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