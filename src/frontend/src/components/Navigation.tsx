import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { FileText, Home } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav className="flex items-center gap-2">
      <Button
        variant={currentPath === '/dashboard' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => navigate({ to: '/dashboard' })}
        className="gap-2"
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Button>
      <Button
        variant={currentPath === '/paper' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => navigate({ to: '/paper' })}
        className="gap-2"
      >
        <FileText className="h-4 w-4" />
        My Paper
      </Button>
    </nav>
  );
}
