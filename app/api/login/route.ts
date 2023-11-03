import prisma from '@/data/prisma';
import * as bcrypt from 'bcrypt';

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const currentUser = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (
    currentUser &&
    (await bcrypt.compare(body.password, currentUser.password))
  ) {
    // eslint-disable-next-line no-unused-vars
    const { password, ...userWithoutPass } = currentUser;
    return new Response(JSON.stringify(userWithoutPass));
  } else {
    return new Response(JSON.stringify(null));
  }
}
