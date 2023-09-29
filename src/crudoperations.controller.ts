import { Controller,Param,Query,Headers,Body,
    Get,Req,Put,Post,Patch,HttpCode,HttpStatus,Res,Header,Redirect } from "@nestjs/common";
import {Request,Response} from "express";
import { crudOperationsDTO } from "./dto";
let USERS=[]
@Controller('/crud')
export class crudOperations{
@Post()
createUser(@Body() createuserdto:crudOperationsDTO){
USERS.push(createuserdto)
return "User created!"
}

@Get()
getUser(){
    return USERS
}
@Get(':id')
getUserById(@Param('id') id:number){
return USERS.find((user)=> +user.id===+id)
}
}