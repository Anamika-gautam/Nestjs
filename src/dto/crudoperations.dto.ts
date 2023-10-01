import { IsInt,IsString } from "class-validator";
export class BookDto{
    @IsString()
    name:string;
    @IsInt()
    age:number;
    @IsInt()
    id:number;
}