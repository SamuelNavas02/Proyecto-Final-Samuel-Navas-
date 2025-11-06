import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Componentes normales
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './registro/registro.component';

// Standalone Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent
    // ❌ PerfilComponent se elimina de aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    DashboardComponent,
    PerfilComponent   // ✅ Aquí sí, porque es standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}