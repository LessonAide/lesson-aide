import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import DashboardPage from '@/routes/dashboard/components/index';
import LoginPage from '@/routes/login/components/index';

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/login", element: <LoginPage /> }
    ],
  },
]);
