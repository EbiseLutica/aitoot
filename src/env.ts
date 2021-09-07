import dotenv from 'dotenv';

dotenv.config();

export const misskeyHost = process.env.MISSKEY_HOST;
export const port = parseInt(process.env.PORT ?? '3000');
export const isDevelopment = process.env.NODE_ENV !== 'production';
