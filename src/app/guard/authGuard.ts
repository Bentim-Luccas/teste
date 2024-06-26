import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verificar se estamos no navegador e se o sessionStorage está disponível
  const isLoggedIn = typeof window !== 'undefined' && window.sessionStorage.getItem("logado") === "true";

  if (isLoggedIn) {
    return true;
  }

  router.navigate(['loginemail']);
  return false;
};
