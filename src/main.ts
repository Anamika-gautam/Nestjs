import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction,Request,Response } from 'express';
let port = 3000

function globalMiddleware(req:Request,res:Response,next:NextFunction){
  let protocol=req.protocol  //http or https
  let host=req.get("host")  //localhost
  let method=req.method
  let url=req.originalUrl
  let date=new Date().toDateString()
// console.log(`Api-> url:${url} runs at ${date} method:${method} host:${host} protocol:${protocol}`);
console.log(`${method} ${protocol}://${host}${url}  - ${date}`);

next()

}
// function globalMiddleware2(req:Request,res:Response,next:NextFunction){
//   console.log("This is global Middleware 2");
//   next()
  
//   }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware)
  // app.use(globalMiddleware2)
  await app.listen(port,()=>{
    console.log("App listen to port ",port)
  });
}
bootstrap();
