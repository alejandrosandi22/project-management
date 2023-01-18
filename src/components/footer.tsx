import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full py-2'>
      <p className='text-black dark:text-gray-300 text-center text-sm'>
        Provided by{' '}
        <Link
          href='https://alejandrosandi.com'
          className='hover:text-gray-900 dark:hover:text-white'
        >
          Alejandro Sandí
        </Link>
      </p>
    </footer>
  );
}
