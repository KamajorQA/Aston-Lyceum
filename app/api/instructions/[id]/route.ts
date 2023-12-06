import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface IParams {
  params: {
    id: string;
  };
}
export async function GET(request: Request, { params }: IParams) {
  const instructionId = +params.id;

  const currentInstruction = await prisma.post.findUnique({
    where: {
      id: instructionId,
    },
  });

  return NextResponse.json(currentInstruction);
}
