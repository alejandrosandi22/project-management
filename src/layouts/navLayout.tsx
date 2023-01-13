import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import React, { useState } from 'react';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <div className='grid-nav-layout min-h-screen bg-white dark:bg-black'>
        <Navbar handleToggle={handleToggle} />
        <div
          style={{
            transform: toggle ? 'translateX(-16rem)' : '',
            transition: '0.5s',
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            gridArea: '2 / 2 / 3 / 3',
          }}
        >
          {children}
        </div>
      </div>

      <style jsx>{`
        .grid-nav-layout {
          display: grid;
          grid-template-columns: ${toggle
            ? '0 100%'
            : '16rem calc(100% - 16rem)'};
          grid-template-rows: 4rem calc(100% - 4rem);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          max-height: 100vh;
          transition: 0.5s;
        }
      `}</style>
    </>
  );
}
