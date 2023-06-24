import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
export async function POST(request: NextRequest) {

  const { title, content } = await request.json();

  const data = {
    title: title,
    content: content,
    authorId: 1 
  }

  await prisma.post.create({
    data: data,
  });

  console.dir(data, { depth: null })

  return NextResponse.json(data);
}