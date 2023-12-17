declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_URL: string;
    NODE_DEV: string;
    BCRYPT_SALT_ROUND: number;
  };
}
