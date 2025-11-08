import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service'; // Ajusta si tu ruta es diferente

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.estaAutenticado()) {
      return true; //Usuario autenticado → puede entrar
    } else {
      this.router.navigate(['/login']); //  No autenticado → lo mando a Login
      return false;
    }
  }
}