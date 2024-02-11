import { createMemoryRouter } from 'react-router-dom';
import Home from '../pages/home';
import Example from '../pages/example';
import ErrorPage from '../pages/error';
import LayoutRoot from '../components/layoutRoot';
import Store from '../pages/store';
import Community from '../pages/community';
import Chat from '../pages/chat';
import Powered from '../pages/powered';

export const routerConfig = createMemoryRouter(
  [
    {
      path: '/',
      id: 'root',
      element: <LayoutRoot />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/store',
          element: <Store />,
        },
        {
          path: '/community',
          element: <Community />,
        },
        {
          path: '/chat',
          element: <Chat />,
        },
        {
          path: '/powered',
          element: <Powered />,
        },
      ],
    },
  ],
  {
    initialEntries: ['/store'],
  },
);
