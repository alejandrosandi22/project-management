import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideBar() {
  const { pathname } = useRouter();
  return (
    <aside
      className='h-full w-64 border-r border-light dark:border-gray-600'
      aria-label='Sidebar'
    >
      <div className='overflow-hidden py-4 px-3'>
        <ul className='space-y-2'>
          <li>
            <Link
              href='/dashboard'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-6 h-6 text-black dark:text-white'
                style={{
                  color: pathname === '/dashboard' ? '#4460A0' : '#ffffff',
                }}
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z'
                  fill='currentColor'
                />
              </svg>
              <span
                className='ml-3 text-black dark:text-white'
                style={{
                  color: pathname === '/dashboard' ? '#4460A0' : '#ffffff',
                }}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                className='w-6 h-6 text-black dark:text-white'
                style={{
                  color: pathname === '/projects' ? '#4460A0' : '',
                }}
                fill='none'
                stroke='currentColor'
                strokeWidth={1.5}
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                />
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              href='/clients'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-6 h-6 text-black dark:text-white'
                style={{
                  color: pathname === '/clients' ? '#4460A0' : '',
                }}
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2zM7 8h10v2H7V8zm0 4h10v2H7v-2z'
                  fill='currentColor'
                />
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Clients</span>
            </Link>
          </li>
          <li>
            <Link
              href='/settings'
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-6 h-6 text-black dark:text-white'
                style={{
                  color: pathname === '/settings' ? '#4460A0' : '',
                }}
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
                  fill='currentColor'
                />
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Settings</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut()}
              className='w-full flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-6 h-6 text-black dark:text-white'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z'
                  fill='currentColor'
                />
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap flex'>
                Sign out
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
