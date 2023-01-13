import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavbarProps {
  handleToggle: () => void;
}

export default function Navbar({ handleToggle }: NavbarProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button
          className='hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg'
          role='button'
          onClick={() => setTheme('light')}
        >
          <svg
            className='w-6 h-6 stroke-gray-700 dark:stroke-gray-100'
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className='hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg'
          role='button'
          onClick={() => setTheme('dark')}
        >
          <svg
            className='w-6 h-6 stroke-gray-700 dark:stroke-gray-100'
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <nav
      className='bg-light border-b border-light h-16 dark:bg-dark dark:border-gray-600'
      style={{ gridArea: '1 / 1 / 2 / 3' }}
    >
      <div className='relative px-8 flex items-center justify-between h-full'>
        <div className='flex items-center gap-4'>
          <button onClick={handleToggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6 text-black dark:text-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z' />
            </svg>
          </button>
          <Link
            href='/dashboard'
            className='flex items-center text-2xl font-medium'
          >
            Management
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <ul className='flex gap-2'>
            <li className='flex items-center justify-center'></li>
            <li className='flex items-center justify-center'>
              {renderThemeChanger()}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
