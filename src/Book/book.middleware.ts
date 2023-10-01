import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class bookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
         console.log("Class based middleware for Book Module");
         next()
    }
}