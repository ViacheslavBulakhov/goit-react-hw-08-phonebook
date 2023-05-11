import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from 'pages/LoginPage';
import RegistrationForm from 'pages/RegistrationPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/error-page';
import { ContactsPage } from 'pages/ContactsPage';
import PrivateRoute from './Routes/PrivateRoute';
import Route from './Routes/route';
import HomePage from 'pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SharedLayout>
        <HomePage />
      </SharedLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: (
          <PrivateRoute>
            <LoginForm />
          </PrivateRoute>
        ),
      },
      {
        path: 'registration',
        element: (
          <PrivateRoute>
            <RegistrationForm />
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
  return (
    <RouterProvider router={router} basename="goit-react-hw-08-phonebook" />
  );
}
