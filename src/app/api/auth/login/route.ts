import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const REAL_PASSWORD = process.env.REAL_PASSWORD;

export async function POST(req: Request) {
  const { pw } = await req.json();

  // 비밀번호 불일치 에러처리
  if (pw !== REAL_PASSWORD) {
    return NextResponse.json({ error: 'Invaild password' }, { status: 401 });
  }

  // 토큰 발급
  const token = await new SignJWT({ login: true }).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('1h').sign(JWT_SECRET);

  // httpOnly 쿠키 설정
  const res = NextResponse.json({ success: true });
  res.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return res;
}
