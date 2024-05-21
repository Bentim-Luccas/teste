import {  CanActivateFn, Router } from '@angular/router';

export const tokenGuard: CanActivateFn = (route, state) => {
  const check = sessionStorage.getItem("email")
  const router = new Router();
  if(check){
    return true
  }
  else {
    router.navigate(['loginemail'])
    return false
  }
};
