import { createMemoryRouter } from 'react-router-dom';
import Home from '../pages/home';
import Example from '../pages/example';
import ErrorPage from '../pages/error';
import LayoutRoot from '../components/layoutRoot';

export const routerConfig = createMemoryRouter(
  [
    {
      path: '/',
      id: 'root',
      element: <LayoutRoot />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/example',
          element: <Example />,
        },
      ],
    },
  ],
  {
    initialEntries: ['/home'],
  },
);
