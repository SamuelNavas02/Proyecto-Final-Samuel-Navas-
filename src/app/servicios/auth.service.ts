import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Guardar token e información del usuario
  login(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(user)); // Usuario completo
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener datos del usuario
  getUsuario(): any {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  // Verificar si está autenticado
  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}