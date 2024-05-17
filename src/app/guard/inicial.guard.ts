import { CanActivateFn, Router } from '@angular/router';

export const inicialGuard: CanActivateFn = (route, state) => {
  const check = sessionStorage.getItem("logado")
  const router = new Router();

  

  if(check === "true"){
    return true
  }
  router.navigate(['loginemail'])
  return false
};
