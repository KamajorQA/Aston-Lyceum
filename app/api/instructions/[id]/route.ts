import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface IParams {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: IParams) {
  const instructionId = +params.id;

  const instructionsList = await prisma.post.findMany();

  const currentInstruction = instructionsList.find(
    (post) => post.id === instructionId
  );

  return NextResponse.json(currentInstruction);
}
