import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.usuariosService.registrarUsuario(this.registroForm.value).subscribe({
        next: (res) => {
          this.mensaje = 'Usuario registrado con éxito';
          this.registroForm.reset();
        },
        error: (err) => {
          this.mensaje = 'Error al registrar usuario';
          console.error(err);
        },
      });
    }
  }
}