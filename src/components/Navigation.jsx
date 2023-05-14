import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute1';

const LoginPage = lazy(() => import('pages/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ErrorPage = lazy(() => import('pages/error-page'));

export const Navigation = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="registration"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="contacts"
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

// export const router = createBrowserRouter(
//   [
//     {
//       path: '/goit-react-hw-08-phonebook',
//       element: <SharedLayout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: '/',
//           element: <HomePage />,
//         },
//         {
//           path: 'login',
//           element: (
//             <PrivateRoute>
//               <LoginPage />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: 'registration',
//           element: (
//             <PrivateRoute>
//               <RegistrationPage />
//             </PrivateRoute>
//           ),
//         },
//         {
//           path: 'contacts',
//           element: (
//             <PublicRoute>
//               <ContactsPage />
//             </PublicRoute>
//           ),
//         },
//       ],
//     },
//   ],
//   {
//     basename: 'goit-react-hw-08-phonebook',
//   }
// );
// return <RouterProvider router={router} />;
