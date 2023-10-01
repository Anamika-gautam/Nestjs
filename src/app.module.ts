//cli command for Module creation and import-----> nest g mo <module_name>
import { Module } from '@nestjs/common';
import { BookModule } from './Book/book.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
@Module({
  imports:[BookModule, OrdersModule, UsersModule],
  controllers: [],
  providers:[]
})
export class AppModule {
  constructor(){
    console.log("Root Module")
  }
}
