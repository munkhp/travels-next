import mongoose from "mongoose";

/**
 * Cached MongoDB connection (survives hot reloads in dev).
 * Set MONGODB_URI in .env.local — e.g. mongodb://localhost:27017/travels
 * Restore the provided BSON dump with:
 *   mongorestore --db travels /path/to/travels-folder
 */
declare global {
  // eslint-disable-next-line no-var
  var _mongoose:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const cached = global._mongoose ?? { conn: null, promise: null };
global._mongoose = cached;

export function hasDb(): boolean {
  return Boolean(process.env.MONGODB_URI);
}

export async function connectDb(): Promise<typeof mongoose> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
