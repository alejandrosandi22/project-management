import AuthForm from 'components/authForm';
import AppLayout from 'layouts/appLayout';
import Link from 'next/link';

export default function SignIn() {
  return (
    <AppLayout title='Sign in | Project Management'>
      <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='w-full px-6 lg:w-1/4'>
          <h1 className='font-extrabold text-primary-900 text-3xl my-10 dark:text-white text-center'>
            Sign in
          </h1>
          <AuthForm type='signin' />
          <p className='text-sm font-light text-gray-500 dark:text-gray-400 mt-4'>
            Don&apos;t have an account?{' '}
            <Link
              href='/signup'
              className='font-medium text-primary-600 hover:underline dark:text-primary-500'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
