import { NextResponse } from 'next/server';
import { instructionsList } from '../localInstructionsList';

interface IParams {
  params: {
    id: string;
  };
}
export function GET(request: Request, { params }: IParams) {
  const instructionId = +params.id;

  const currentInstruction = instructionsList.find(
    (post) => post.id === instructionId
  );

  return NextResponse.json(currentInstruction);
}
