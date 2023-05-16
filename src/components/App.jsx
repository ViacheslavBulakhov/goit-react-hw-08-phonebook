import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { HashLoader } from 'react-spinners';

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
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
  ) : (
    <Navigation />
  );
}
