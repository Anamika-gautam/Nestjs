import { ArgumentMetadata,BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToClass,plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { BookDto } from "src/dto";
//Writing custom pipe for validating book module
export class BookPipe implements PipeTransform{
async transform(value: any, metadata: ArgumentMetadata) {

    //convert object to class
    const bookclass=plainToInstance(BookDto,value)
    //perform class validation
    const errors=await validate(bookclass);
    if(errors.length>0){
        throw new BadRequestException('Validation failed ->',JSON.stringify(errors))
    }
    
    // console.log("value=",value+" "+"type of value=",typeof value)
    // if(value.id && value.name && value.age)
        return value
    // else
    //     throw new BadRequestException('Mandatory params missing!')
}
}