import { CanActivate, Injectable } from "@nestjs/common";
import {ExecutionContext} from "@nestjs/common/interfaces/features/execution-context.interface"
import {Request} from "express"
@Injectable()
export class BookGuard implements CanActivate{
    public key:string='BAFFJHGGYTYIYIYIHKJK'
    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp()
        const req=ctx.getRequest<Request>()
        if(!req.headers.key)
            return false
        return req.headers.key===this.key
       
    }
}