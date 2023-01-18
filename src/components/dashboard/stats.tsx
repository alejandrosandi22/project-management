export default function Stats() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
      <div className='border border-gray-300 dark:border-gray-600 rounded p-5 flex flex-col items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-10 h-10 text-primary-700 dark:text-primary-500'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zm0 2v2h-2V4H9v2H7V4H5v16h14V4h-2zM7 8h10v2H7V8zm0 4h10v2H7v-2z'
            fill='currentColor'
          />
        </svg>
        <p className='text-lg text-black dark:text-white font-medium'>
          Current projects
        </p>
        <h2 className='text-4xl font-semibold text-black dark:text-white'>
          42
        </h2>
      </div>
      <div className='border border-gray-300 dark:border-gray-600 rounded p-5 flex flex-col items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-10 h-10 text-primary-700 dark:text-primary-500'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z'
            fill='currentColor'
          />
        </svg>
        <p className='text-lg text-black dark:text-white font-medium'>
          Completed projects
        </p>
        <h2 className='text-4xl font-semibold text-black dark:text-white'>
          123
        </h2>
      </div>
      <div className='border border-gray-300 dark:border-gray-600 rounded p-5 flex flex-col items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-10 h-10 text-primary-700 dark:text-primary-500'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z'
            fill='currentColor'
          />
        </svg>
        <p className='text-lg text-black dark:text-white font-medium'>
          Porcentage
        </p>
        <h2 className='text-4xl font-semibold text-black dark:text-white'>
          80%
        </h2>
      </div>
      <div className='border border-gray-300 dark:border-gray-600 rounded p-5 flex flex-col items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-10 h-10 text-primary-700 dark:text-primary-500'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M4 22a8 8 0 1 1 16 0H4zm9-5.917V20h4.659A6.009 6.009 0 0 0 13 16.083zM11 20v-3.917A6.009 6.009 0 0 0 6.341 20H11zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z'
            fill='currentColor'
          />
        </svg>
        <p className='text-lg text-black dark:text-white font-medium'>
          Clients
        </p>
        <h2 className='text-4xl font-semibold text-black dark:text-white'>
          165
        </h2>
      </div>
    </div>
  );
}
