import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:TmneW9Adj3ob@ep-sweet-brook-a5iaznfr.us-east-2.aws.neon.tech/ai-course-generator?sslmode=require'
  }
});
