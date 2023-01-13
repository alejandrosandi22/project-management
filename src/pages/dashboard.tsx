import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';
import DotsLoader from 'components/loaders/dots';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
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
    <AppLayout title='Dashboard | Project Management'>
      <NavLayout>
        <div>Dashboard works!</div>
      </NavLayout>
    </AppLayout>
  );
}
