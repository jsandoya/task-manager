// backend/src/db.js
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

// For testing conection
export async function pingDB() {
  const rows = await prisma.$queryRaw`SELECT 1+1 AS result`;
  return rows;
}