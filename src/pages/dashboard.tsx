import AppLayout from 'layouts/appLayout';
import NavLayout from 'layouts/navLayout';
import DotsLoader from 'components/loaders/dots';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Stats from 'components/dashboard/stats';
import Chart from 'components/dashboard/chart';
import Upcoming from 'components/dashboard/upcoming';
import LastCompletedProject from 'components/dashboard/lastCompletedProject';
import Footer from 'components/footer';

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
        <div className='text-2xl text-black dark:text-white p-11 space-y-11'>
          <div className='font-semibold'>Dashboard</div>
          <Stats />
          <Chart />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-11'>
            <Upcoming />
            <LastCompletedProject />
          </div>
        </div>
        <Footer />
      </NavLayout>
    </AppLayout>
  );
}
