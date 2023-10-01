import { BookDto } from "src/dto";
import { Body,Param ,Req} from "@nestjs/common";
import {Request,Response} from "express"
export class ChatService{
    USERS=[]
    addBook(reqBody:object){
        this.USERS.push(reqBody)
    }
    
    getBook(){
        return this.USERS
    }

    getBookById(id:number){
    return this.USERS.find((user)=> +user.id===+id)
    }
    
    updatebook(updateBook:BookDto,id:number){
    const bookIndex=this.USERS.findIndex((book)=> +book.id===+id)
    console.log("bookIndex=",bookIndex)
    if(!bookIndex){
        return "No Book found!"
    }else{
        this.USERS[bookIndex]=updateBook
    }
    }
    deletebook(id:number){
        this.USERS=this.USERS.filter((book)=> +book.id!==+id)
    }
    }
   
