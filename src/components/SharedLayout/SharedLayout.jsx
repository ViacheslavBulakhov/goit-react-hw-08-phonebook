import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderAppBar from 'pages/AppBar/HeaderAppBar';

const SharedLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <header>
        <HeaderAppBar />
      </header>
      <main>
        {location.pathname === '/' ? (
          children
        ) : (
          <Suspense fallback={<p>Hello</p>}>
            <Outlet />
          </Suspense>
        )}
      </main>
    </>
  );
};
export default SharedLayout;
