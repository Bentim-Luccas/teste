import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const inicialGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const check = sessionStorage.getItem("logado");

  if (check === "true") {
    return true;
  }

  router.navigate(['loginemail']);
  return false;
};
