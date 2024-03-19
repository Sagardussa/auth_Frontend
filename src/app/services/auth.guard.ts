import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  
    if ( !localStorage.getItem( 'user_id' ) ) {
      return false
    }
    return true
  };
