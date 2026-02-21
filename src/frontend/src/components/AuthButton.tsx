import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, Loader2 } from 'lucide-react';

export default function AuthButton() {
  const { identity, login, clear, isLoggingIn, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
      </Button>
    );
  }

  if (identity) {
    const principal = identity.getPrincipal().toString();
    const shortPrincipal = `${principal.slice(0, 5)}...${principal.slice(-3)}`;

    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground hidden sm:inline">
          {shortPrincipal}
        </span>
        <Button variant="outline" size="sm" onClick={clear} className="gap-2">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={login} disabled={isLoggingIn} size="sm" className="gap-2">
      {isLoggingIn ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Signing In...
        </>
      ) : (
        <>
          <LogIn className="h-4 w-4" />
          Sign In
        </>
      )}
    </Button>
  );
}
