import { Controller,Post,Delete,Put,Get,Body, Req,Param } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { BookDto } from "src/dto";
import { Request,Response } from "express";
// import { Request } from "supertest";
@Controller('Chat')
export class ChatController{
    constructor(private chatService: ChatService) {}
    //Add a book
    @Post('/add')
    addBook(@Req() req:Request){
        console.log("Request body=",req.body)
        return this.chatService.addBook(req.body)
    }
   @Get('/getallchat')
   getBook(){
    return this.chatService.getBook()
   }
   @Get('/getById')
   getBookById(@Param('id') id:number){
    return this.chatService.getBookById(id)
    }
    
    updatebook(@Body() updatebook:BookDto,@Param('id') id:number){
        this.chatService.updatebook(updatebook,id)
    }
    deletebook(@Param('id') id:number){
        this.chatService.deletebook(id)    }

}