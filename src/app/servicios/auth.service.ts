import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioKey = 'usuario'; // Nombre de clave en localStorage

  constructor() {}

  // Guardar usuario (o token) en localStorage
  guardarUsuario(usuario: any) {
    localStorage.setItem(this.usuarioKey, JSON.stringify(usuario));
  }

  // Obtener usuario guardado
  obtenerUsuario() {
    const usuario = localStorage.getItem(this.usuarioKey);
    return usuario ? JSON.parse(usuario) : null;
  }

  // Saber si el usuario está autenticado
  estaAutenticado(): boolean {
    return localStorage.getItem(this.usuarioKey) !== null;
  }

  // Eliminar usuario (logout)
  cerrarSesion() {
    localStorage.removeItem(this.usuarioKey);
  }
}