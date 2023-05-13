import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import HeaderAppBar from 'pages/AppBar/HeaderAppBar';
import { HashLoader } from 'react-spinners';

const SharedLayout = () => {
  return (
    <>
      <header>
        <HeaderAppBar />
      </header>
      <main>
        <Suspense
          fallback={
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <HashLoader
                color="green"
                loading="true"
                size={155}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
