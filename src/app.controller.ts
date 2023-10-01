import { Controller,Post,Delete,Put,Get } from "@nestjs/common";
import { BookServices } from "./app.service";
@Controller('Book')
export class BookController{
    // public BookServices: BookServices=new BookServices()
    constructor(private BookServices: BookServices){}
    //Add a book
    @Post('/add')
    addBook(): string{
        return this.BookServices.addBook()
    }
    //Delete a book
    @Delete('/delete')
    deleteBook() : string{
        return this.BookServices.deleteBook()
    }

    //Update a Book
    @Put('/update')
    updateBook():string{
        return this.BookServices.updateBook()
    }
    //Get all Book
    @Get('/Get')
    getAll():string{
        return this.BookServices.getAll()
    }
}