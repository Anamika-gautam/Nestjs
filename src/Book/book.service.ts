import { BookDto } from "src/dto";
import { Body,Injectable,Param ,Req} from "@nestjs/common";
import {Request,Response} from "express"
@Injectable()
export class BookService{
    USERS=[]
    addBook(reqBody:object,res:any){
        // console.log("service=",this.USERS.push(reqBody))
        this.USERS.push(reqBody)
        return res.json({
            "message":"Data Added successfully!"
        })
    }
    
    getBook(){
        return this.USERS
    }

    getBookById(id:number){
        console.log("id=",id+" "+"type=",typeof id)
    return this.USERS.find((user)=> +user.id===+id)
    }
    
    updatebook(updateBook:BookDto,id:number,res:any){
        console.log("update book=",updateBook)
    const bookIndex=this.USERS.findIndex((book)=> +book.id===+id)
    console.log("bookIndex=",bookIndex)
    console.log("USERS=",this.USERS)
    if(bookIndex<0){
        console.log("Inside if")
        return "No Book found!"
    }else{
        console.log("Inside else")
        this.USERS[bookIndex]=updateBook
        return res.json({
            "message":"Data updated Successfully!"
        })
    }
    }
    deletebook(id:number){
        return this.USERS=this.USERS.filter((book)=> +book.id!==+id)
    }
    }
   
