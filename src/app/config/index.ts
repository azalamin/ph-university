import dotenv from "dotenv";
import Path from "path";

dotenv.config({ path: Path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  default_password: process.env.DEFAULT_PASSWORD,
  node_dev: process.env.NODE_DEV,
};
