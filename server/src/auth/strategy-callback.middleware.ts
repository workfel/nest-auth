import { Injectable, NestMiddleware } from '@nestjs/common';
import { ExpressMiddleware } from '@nestjs/common/interfaces/middlewares/express-midleware.interface';
import { NextFunction } from 'express';

@Injectable()
export class StrategyCallbackMiddleware implements NestMiddleware {
  constructor() {
  }

  async resolve(...args: any[]): Promise<ExpressMiddleware> {
    return async (req: any, res: any, next: NextFunction) => {
      const io = req.app.get('io');
      const user = {
        name: req.user.displayName,
        photo: req.user.photo,
      };
      io.in(req.session.socketId).emit(args[0].provider, user);
      res.end();
    };

  }
}