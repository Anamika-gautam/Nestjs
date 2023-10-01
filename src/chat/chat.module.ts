import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { chatMiddleware } from './chat.middleware';
@Module({
    controllers:[ChatController],
    providers:[ChatService]
})
export class ChatModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(chatMiddleware).forRoutes("Chat")
    }

}
