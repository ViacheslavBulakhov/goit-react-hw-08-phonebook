import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from 'pages/LoginPage';
import RegistrationForm from 'pages/RegistrationPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/error-page';
import { ContactsPage } from 'pages/ContactsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'registration',
        element: <RegistrationForm />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
