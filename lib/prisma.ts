import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@/generated/prisma/client'
import { withOptimize } from "@prisma/extension-optimize";



const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient({adapter}).$extends(
  withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY || '' })
)

export { prisma }