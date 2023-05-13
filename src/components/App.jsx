import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from './Routes/PrivateRoute';
import Route from './Routes/route';

const LoginPage = lazy(() => import('pages/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ErrorPage = lazy(() => import('pages/error-page'));

const router = createBrowserRouter([
  {
    path: '/',

    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: (
          <PrivateRoute>
            <LoginPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'registration',
        element: (
          <PrivateRoute>
            <RegistrationPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'contacts',
        element: (
          <Route>
            <ContactsPage />
          </Route>
        ),
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
//basename: 'goit-react-hw-08-phonebook',
