import { signJwtAccessToken } from '@/lib/jwt';
import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

interface IRequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: IRequestBody = await request.json();

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
    const accessToken = signJwtAccessToken(userWithoutPass, { expiresIn: 900 });
    const signedUser = {
      ...userWithoutPass,
      accessToken,
    };

    return new Response(JSON.stringify(signedUser));
  } else {
    return new Response(JSON.stringify(null));
  }
}
