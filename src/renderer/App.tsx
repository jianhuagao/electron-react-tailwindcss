import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from './configs/router';

export default function App() {
  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  );
}
