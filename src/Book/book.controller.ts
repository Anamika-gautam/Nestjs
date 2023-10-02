import { Controller,Post,Delete,Put,Get,Body, Req,Res,Param,ParseIntPipe, ValidationPipe,
     BadRequestException, UseGuards, UseInterceptors } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "src/dto";
import { Request,Response } from "express";
import { BookPipe } from "src/pipes/book.pipe";
import { error } from "console";
import { BookGuard } from "./book.guard";
import { BookInterceptor } from "./book.interceptor";
// import { Request } from "supertest";
@Controller('Book')
export class BookController{
    constructor(private bookService: BookService) {}
    //Add a book
    @Post('/add')
    @UseInterceptors(BookInterceptor)
    addBook(@Body(new ValidationPipe()) book:BookDto,@Res() res:Response,@Req() req:Request){
        // console.log("Request body=",req.body)
        // console.log("controller=",this.bookService.addBook(req.body))
        console.log("Interceptor sets the req params=",req.query)
        this.bookService.addBook(book,res)
        // return "Normal response"
    }
   @Get('/getallbook')
   @UseGuards(new BookGuard)
   getBook(){

    //throws custom exception 
    // throw new BadRequestException({
    //     status:400,
    //     message:"Custom error message!"
    // })
    return this.bookService.getBook()
   }
   @Get('/getById/:id')
   getBookById(@Param('id',ParseIntPipe) id:number){
    return this.bookService.getBookById(id)
    }
    @Put("/update/:id")
    updatebook(@Body() updatebook:BookDto,@Param('id') id:number,@Res() res:Response){
        this.bookService.updatebook(updatebook,id,res)
    }
    @Delete("/delete/:id")
    deletebook(@Param('id') id:number){
        this.bookService.deletebook(id)    }

}