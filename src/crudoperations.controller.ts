import { Controller,Param,Query,Headers,Body,Delete,
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
@Put(':id')
updateuser(@Body() updateuser:crudOperationsDTO,@Param('id') id:number){
const userIndex=USERS.findIndex((user)=> +user.id===+id)
console.log("userIndex=",userIndex)
if(!userIndex){
    return "No user found!"
}else{
    USERS[userIndex]=updateuser
}
}
@Delete(':id')
deleteuser(@Param('id') id:number){
    USERS=USERS.filter((user)=> +user.id!==+id)
}
}