import React from 'react';
import AppLayout from 'layouts/appLayout';

export default function VerifyEmail() {
  return (
    <AppLayout title='Verify Request'>
      <div className='w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark'>
        <div className='border border-gray-200 dark:border-white/25 rounded p-10'>
          <h1 className='text-black dark:text-white text-center font-medium text-lg'>
            Check your email
          </h1>
          <p className='text-black dark:text-white text-center text-lg'>
            A sign in link has been sent to your email address.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
