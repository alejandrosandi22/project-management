import AuthForm from 'components/authForm';
import AppLayout from 'layouts/appLayout';
import Link from 'next/link';

export default function SignUp() {
  return (
    <AppLayout title='Sign up | Project Management'>
      <div className='w-full lg:min-h-screen flex gap-8 flex-col lg:flex-row'>
        <section className='w-full lg:w-1/2 flex items-center justify-center md:max-h-screen'>
          <div className='w-full px-6 lg:w-1/2 max-w-lg'>
            <h1 className='font-extrabold text-primary-900 text-3xl my-10 dark:text-white text-center'>
              Sign up
            </h1>
            <AuthForm type='signup' />
            <p className='text-sm font-light text-gray-500 dark:text-gray-400 mt-4'>
              You already have an account?{' '}
              <Link
                href='/signin'
                className='font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
        <section className='relative bg-gray-200 dark:bg-gray-800 w-full lg:w-1/2 flex items-center justify-center'>
          <div className='relative z-10 px-5 py-10 max-w-lg lg:max-w-xl'>
            <div className='p-4 flex mb-10'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-900 mb-4 flex-shrink-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-black dark:text-white text-xl font-bold mb-2'>
                  Organize projects
                </h2>
                <p className='leading-relaxed text-lg text-black dark:text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  recusandae nesciunt officia voluptatum consequatur dolorum
                  enim dolore quasi.
                </p>
              </div>
            </div>
            <div className='p-4 flex mb-10'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-900 mb-4 flex-shrink-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-black dark:text-white text-xl font-bold mb-2'>
                  Clients management
                </h2>
                <p className='leading-relaxed text-lg text-black dark:text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis, quo dolorum officiis veniam vel odit maxime dicta
                  tempora quasi atque aliquam natus eius dolorem consequuntur
                  fuga reiciendis fugiat, quam eligendi.
                </p>
              </div>
            </div>
            <div className='p-4 flex mb-10'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-900 mb-4 flex-shrink-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-black dark:text-white text-xl font-bold mb-2'>
                  Projects timelines
                </h2>
                <p className='leading-relaxed text-lg text-black dark:text-gray-300'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis, quo dolorum officiis veniam vel odit maxime dicta
                  tempora quasi atque aliquam natus eius dolorem consequuntur
                  fuga reiciendis fugiat, quam eligendi.
                </p>
              </div>
            </div>
            <div className='p-4 flex'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-900 mb-4 flex-shrink-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='flex-grow pl-6'>
                <h2 className='text-black dark:text-white text-xl font-bold mb-2'>
                  Projects tatistics
                </h2>
                <p className='leading-relaxed text-lg text-black dark:text-gray-300'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur impedit nisi atque doloremque exercitationem,
                  dignissimos nam deleniti harum eveniet cupiditate tenetur
                  dicta, tempore laborum aspernatur, amet iure sunt vel iste?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
