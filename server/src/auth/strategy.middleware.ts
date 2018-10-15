import { Injectable, NestMiddleware } from '@nestjs/common';
import { ExpressMiddleware } from '@nestjs/common/interfaces/middlewares/express-midleware.interface';
import * as passport from 'passport';

@Injectable()
export class StrategyMiddleware implements NestMiddleware {
  constructor() {
  }

  async resolve(...args: any[]): Promise<ExpressMiddleware> {
    if (args.length === 0 || !args[0].provider) {
      throw new Error('Missing provider for authenticate oauth');
    }
    const provider = args[0].provider;
    return passport.authenticate(provider, { scope: ['profile', 'email'] });
  }
}