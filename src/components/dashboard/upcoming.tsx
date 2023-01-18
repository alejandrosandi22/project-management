import Link from 'next/link';

export default function Upcoming() {
  return (
    <div className='p-6 border border-gray-300 rounded dark:border-gray-700'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Upcoming
      </h5>
      <Link href='/'>
        <h2 className='text-black dark:text-white font-medium text-lg'>
          Project test title
        </h2>
      </Link>
      <p className='mb-3 font-normal text-base text-black dark:text-white'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page.
      </p>
      <p className='mb-3 font-normal text-base text-primary-700 dark:text-primary-500'>
        Delivery: 25 January, 2023
      </p>
    </div>
  );
}
