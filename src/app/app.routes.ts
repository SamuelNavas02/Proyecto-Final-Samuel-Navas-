import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from '../component/login/login.component';
import { RegistroComponent } from '../component/registro/registro.component';
import { PerfilComponent } from '../component/perfil/perfil.component';
import { UsuariosComponent } from '../component/usuarios/usuarios.component';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: '' }
];