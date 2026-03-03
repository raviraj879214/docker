// app/api/test-env/route.ts

export async function GET() {
  return Response.json({
    database: process.env.DATABASE_URL || "NOT FOUND",
  })
}