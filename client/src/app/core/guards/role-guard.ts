import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const required = route.data['role'] as string | undefined;

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (!required) return true;
  if (auth.hasRole(required)) return true;

  router.navigate(['/not-authorized']);
  return false;
};
