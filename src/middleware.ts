import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  // 로그인 하지 않은 회원 로그인 화면으로 리다이렉트
  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 토큰의 유효성 검사
  try {
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    console.error('JWT Verify Error:', err);
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/main/:path*', '/write/:path*'],
};
