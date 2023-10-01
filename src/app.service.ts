import { Injectable } from "@nestjs/common"

@Injectable()
export class BookServices{

    //Add a book
    addBook(): string{
        return "Add a Book"
    }
    //Delete a book
    deleteBook() : string{
        return "Delete a Book"
    }

    //Update a Book
    updateBook():string{
        return "Update a Book"
    }
    //Get all Book
    getAll():string{
        return "Find all Book"
    }
}