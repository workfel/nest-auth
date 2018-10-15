import { Injectable } from '@nestjs/common';
import {  OAuth2Strategy } from 'passport-google-oauth';
import { Config } from '../config';

import * as passport from 'passport';

@Injectable()
export class GoogleStrategy extends OAuth2Strategy {
  constructor() {
    // http://www.passportjs.org/docs/google/
    super({
      clientID: Config.GOOGLE_CLIENT_ID,
      clientSecret: Config.GOOGLE_CLIENT_SECRET,
      callbackURL: Config.GOOGLE_CB_URL,
      passReqToCallback: true,
    }, (req, accessToken, refreshToken, profile, done) => {
      const user: any = {
        email: profile.emails[0].value,
        photo: profile.photos[0].value.replace(/sz=50/gi, 'sz=250'),
        image: profile._json.image.url,
        displayName: profile.displayName,
        googleAccount: {
          googleId: profile.id,
          googleToken: accessToken,
        },
      };
      return done(null, user);
    });
    passport.use(this);

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });

  }

}
