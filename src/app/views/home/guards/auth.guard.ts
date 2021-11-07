import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(): boolean | UrlTree {
    
      if(typeof window.sessionStorage.getItem('token') !== "string"){
        console.log("Redirecionando")
        NavBarComponent.showLoginModal.emit();
        // return this.router.parseUrl('');
        alert("Você precisa estar logado para acessar esta página");
        return this.router.parseUrl('');
      }
      else{
        return true
      }
  }
  
}
