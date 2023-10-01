//cli command for Module creation and import-----> nest g mo <module_name>
import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';
import { BookServices } from './app.service';
@Module({
  imports:[ChatModule, OrdersModule, UsersModule],
  controllers: [BookController],
  providers:[BookServices]
})
export class AppModule {
  constructor(){
    console.log("Root Module")
  }
}
