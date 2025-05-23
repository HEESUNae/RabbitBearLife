import { Suspense } from 'react';
import { Header } from '@/widgets';
import { WriteForm } from '@/features';

export default function WritePage() {
  return (
    <>
      <Header />
      <Suspense>
        <WriteForm />
      </Suspense>
    </>
  );
}
