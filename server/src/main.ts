import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/websockets';
import * as socketio from 'socket.io';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add websocket on your server
  app.useWebSocketAdapter(new WsAdapter(app.getHttpServer()));
  // Connecting sockets to the server and adding them to the request
  // so that we can access them later in the controller
  const io = socketio(app.getHttpServer());
  app.set('io', io);

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(8080);

}
bootstrap();
