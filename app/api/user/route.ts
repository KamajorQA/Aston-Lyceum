import * as bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

interface IRequestBody {
  name: string;
  email: string;
  password: string;
  image?: string;
}

export async function POST(request: Request) {
  const body: IRequestBody = await request.json();

  // создаем нового пользователя в БД
  // пароль сразу шифруем и в БД храним его хеш
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      image: body.image || '',
    },
  });

  // на клиент возвращаем созданного пользователя без пароля
  // eslint-disable-next-line no-unused-vars
  const { password, ...userWithoutPass } = newUser;

  return new Response(JSON.stringify(userWithoutPass));
}
