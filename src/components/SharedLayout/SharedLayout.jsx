import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ButtonAppBar from 'pages/UserMenu';

const SharedLayout = () => {
  return (
    <>
      <header>
        <ButtonAppBar />
      </header>
      <main>
        <Suspense fallback={<p>Hello</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
