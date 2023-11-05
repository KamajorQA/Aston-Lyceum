import jwt, { JwtPayload } from 'jsonwebtoken';

// интерфейс для опций jwt, передаваемых третьим аргументом в функцию jwt.sign()
interface ISignOption {
  expiresIn?: string | number;
}

// дефолтные опции со временем жизни токена в 1 час,
// чтобы не требовалось всегда передавать в функцию генерации токена время жизни вручную
const DEFAULT_SIGN_OPTION: ISignOption = {
  expiresIn: '1h',
};

// функция генерации (signing - подписания, т.е. создания) JWT токена
function signJwtAccessToken(
  payload: JwtPayload,
  options: ISignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);

  return token;
}

// функция верификации (проверки валидности) JWT токена
// если при проверке в функции jwt.verify() переданный токен не соответствует
// переданной секретной строке, то выбрасывается ошибка
// которую мы обрабатываем в блоке catch
// возврат null, означает, что токен невалиден
function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, secret_key as string);
    return decodedToken as JwtPayload;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error);
    return null;
  }
}

export { signJwtAccessToken, verifyJwt };
