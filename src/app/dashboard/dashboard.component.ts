import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegistroComponent } from '../registro/registro.component';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [NavbarComponent, RegistroComponent, PerfilComponent]
})
export class DashboardComponent {}