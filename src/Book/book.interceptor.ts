import { Injectable, NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request,Response } from "express";
import {map} from "rxjs/operators"
@Injectable()
//Interceptor checks for both req and res. While middleware only works for req.
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const req=context.switchToHttp().getRequest<Request>()
        const res=context.switchToHttp().getResponse<Response>()
        req.query.interceptor_param='Interceptor'
        return next.handle().pipe(map((data)=>{
            data="This is interceptor response"
            return data
        }))
    }

}