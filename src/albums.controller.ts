//npm i @types/express-------------> for express related types
import { Controller,Get,Req,Put,Post,Patch } from "@nestjs/common";
import {Request} from "express";
// import {Get} from "@nestjs/common";
@Controller('/albums')
export class AlbumController{
    
    @Get()
    async getProfile(@Req() req:Request){
        console.log("params=",req.params)
        console.log("Query params=",req.query)
        console.log("Body params=",req.body)
        console.log("headers =",req.headers)
        return "album"
    }
}