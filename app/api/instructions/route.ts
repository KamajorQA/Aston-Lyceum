import { NextResponse } from 'next/server';
import { instructionsList } from './localInstructionsList';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('q');

  let currentPosts = instructionsList;

  if (query) {
    currentPosts = instructionsList.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentPosts);
}
