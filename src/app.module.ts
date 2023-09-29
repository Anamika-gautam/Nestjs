import { Module } from '@nestjs/common';
import {UserController} from './users.controller'
import {AlbumController} from './albums.controller'
import { crudOperations } from './crudoperations.controller';
@Module({
  
  controllers: [UserController,AlbumController,crudOperations],
  
})
export class AppModule {}
