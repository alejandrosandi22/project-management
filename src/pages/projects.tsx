import DotsLoader from 'components/loaders/dots';
import Header from 'components/projects/header';
import Main from 'components/projects/main';
import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Projects() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/signin');
  }

  if (status === 'loading') {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-white dark:bg-black'>
        <DotsLoader />
      </div>
    );
  }

  return (
    <AppLayout title='Projects | Project Management'>
      <NavLayout>
        <div className='text-2xl text-black dark:text-white p-11 space-y-11'>
          <Header />
          <Main />
        </div>
      </NavLayout>
    </AppLayout>
  );
}
