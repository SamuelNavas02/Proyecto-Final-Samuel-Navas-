import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
  }

  logout() {
    this.authService.logout();
    window.location.reload(); // Refrescar para limpiar interfaz
  }
}