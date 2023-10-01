import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class chatMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
         console.log("Class based middleware for Chat Module");
         next()
    }
}