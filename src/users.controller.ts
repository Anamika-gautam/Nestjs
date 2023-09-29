//npm i @types/express-------------> for express related types
import { Controller,Param,Query,Headers,Body,
    Get,Req,Put,Post,Patch,HttpCode,HttpStatus,Res,Header,Redirect } from "@nestjs/common";
import {Request,Response} from "express";
import { PassThrough } from "stream";
// import {Get} from "@nestjs/common";
interface abc{
    id:Number,
    name:string
}
@Controller('/users')
export class UserController{
    
    @Get('/profile')
    @HttpCode(HttpStatus.OK)
    async getProfile(@Req() req:Request, @Res({passthrough:true}) res:Response){
        console.log("params=",req.params)
        console.log("Query params=",req.query)
        console.log("Body params=",req.body)
        console.log("headers =",req.headers)
        res.json({
            "result":"Success"
        })
    }

    @Get('/dynamic/:id/:name')
    @HttpCode(HttpStatus.OK)
    // async getdynamic(@Param() params: Record<string,any>){
    //     console.log(params.id)
    //     console.log(params.name)

    //   return "test"
       
    // }
    // async getdynamic(@Param() params: abc){
    //     console.log(params.id)
    //     console.log(params.name)

    //   return "test"
       
    // }
    // async getdynamic(@Param('id') params: number){
    //     console.log(params)
    //   return "test"
       
    // }
    async getdynamic(@Query() query: Record<string,any>){
        console.log(query)
        let a=6
        a=8
        let obje1={
            "name":"ana",
            "key2":"jgjgjh"
        }
        obje1={
            "name":"saksham",
            "key2":"jgjhgjh"
        }
        // console.log(query.name)

      return "test"
       
    }


    @Post('/send')
     async senddata(@Body() reqData:Record<string,any>){
       console.log("req data=",reqData)
      return "test"
       
    }
}