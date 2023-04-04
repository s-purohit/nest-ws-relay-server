import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;

    async handleConnection() {
        console.log('Client connected');
    }

    async handleDisconnect() {
        console.log('Client disconnected');
    }

    @SubscribeMessage('message')
    handleMessage(client: any, payload: any): string {
        return 'Hello world!';
    }

    afterInit(server: any) {
        console.log('Gateway initialized');
    }
}
