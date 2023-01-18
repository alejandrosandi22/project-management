import Head from 'next/head';

export default function AppLayout({ children, title }: AppLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='A project management web app is a software application that is accessible through a web browser and allows users to manage and organize projects. It includes features such as task assignment and tracking and project timelines.'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='bg-white dark:bg-black'>{children}</div>
    </>
  );
}
