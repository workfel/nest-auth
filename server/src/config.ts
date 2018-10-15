export class Config {
    // --- OAUTH --- Google
    static GOOGLE_CLIENT_ID : string = process.env.GOOGLE_CLIENT_ID || '550686690224-4oiimqcork5cb2r1jfk64ojooopj14vo.apps.googleusercontent.com';
    static GOOGLE_CLIENT_SECRET : string = process.env.GOOGLE_CLIENT_SECRET;
    static GOOGLE_CB_URL : string = process.env.GOOGLE_CB_URL || 'http://127.0.0.1:8080/auth/google/callback';
}