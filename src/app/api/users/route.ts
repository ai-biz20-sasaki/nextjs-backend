import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
 
export async function GET() {

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
 
  return NextResponse.json({ allUsers })
}

export async function POST(request: NextRequest) {

  const { name, email } = await request.json();

  const data = {
    name: name,
    email: email,
    posts: {
      create: { title: 'dummy title', content: 'dummy content' },
    },
  }

  await prisma.user.create({
    data: data
  })

  console.dir(data, { depth: null })

  return NextResponse.json(data);
  
}

