declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number;
    DATABASE_URL: string;
    NODE_DEV: string;
    DEFAULT_PASSWORD: string;
    BCRYPT_SALT_ROUND: number;
  };
}
