import { Injectable, NestMiddleware } from '@nestjs/common';
import { ExpressMiddleware } from '@nestjs/common/interfaces/middlewares/express-midleware.interface';
import { NextFunction } from 'express';

@Injectable()
export class SessionAuthMiddleware implements NestMiddleware {
  constructor() {
  }

  async resolve(...args: any[]): Promise<ExpressMiddleware> {
    return async (req: any, res: Response, next: NextFunction) => {
      if (req.query.socketId) {
        req.session.socketId = req.query.socketId;
      }
      next();
    };

  }
}