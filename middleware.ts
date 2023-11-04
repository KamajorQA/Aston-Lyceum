export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile', '/auditorium', '/auditorium/:path*'],
};
