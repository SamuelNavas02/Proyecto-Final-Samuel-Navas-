import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // Simulación de login exitoso
    if (email === 'usuario@test.com' && password === '123456') {
      localStorage.setItem('usuario', JSON.stringify({ email }));
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/perfil']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}