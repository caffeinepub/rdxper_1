import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import GeneratedPaper from './pages/GeneratedPaper';
import Layout from './components/Layout';

const rootRoute = createRootRoute({
  component: () => <Layout><Outlet /></Layout>,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Landing,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

const paperRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paper',
  component: GeneratedPaper,
});

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute, paperRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
