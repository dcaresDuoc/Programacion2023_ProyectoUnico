import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {



  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRole = this.authService.getUserRole();

    // Aquí puedes ajustar la lógica según tus necesidades
    if (userRole === '[ADMIN]') {
      return true; // Usuario administrador, permitir acceso
    } else {
      this.router.navigate(['/unauthorized']); // Redirigir a página de acceso no autorizado
      return false; // No permitir acceso
    }
  }
}

