import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const instructionsList = await prisma.post.findMany();

  const query = searchParams.get('q');

  let currentPosts = instructionsList;

  if (query) {
    currentPosts = instructionsList.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentPosts);
}
