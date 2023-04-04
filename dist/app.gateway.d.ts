import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(): Promise<void>;
    handleDisconnect(): Promise<void>;
    handleMessage(client: any, payload: any): string;
    afterInit(server: any): void;
}
