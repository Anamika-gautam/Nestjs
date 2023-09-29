import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
let port = 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port,()=>{
    console.log("App listen to port ",port)
  });
}
bootstrap();
