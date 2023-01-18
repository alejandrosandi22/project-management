import Link from 'next/link';

export default function LastCompletedProject() {
  return (
    <div className='p-6 border border-gray-300 rounded dark:border-gray-700'>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Last completed project
        </h5>
      </a>
      <h2 className='text-black dark:text-white font-medium text-lg'>
        Project test title
      </h2>
      <p className='mb-3 font-normal text-base text-black dark:text-white'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page.
      </p>
      <Link
        href='/'
        className='mb-3 font-normal text-base text-primary-700 dark:text-primary-500 hover:text-primary-900 '
      >
        See project
      </Link>
    </div>
  );
}
