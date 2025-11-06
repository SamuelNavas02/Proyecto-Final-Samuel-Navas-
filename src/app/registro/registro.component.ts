import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService, Usuario } from '../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarios: Usuario[] = [];
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  onSubmit() {
    if (this.registroForm.invalid) return;

    const nuevoUsuario: Usuario = this.registroForm.value;
    this.usuariosService.crearUsuario(nuevoUsuario).subscribe(
      (usuario: Usuario) => {
        this.usuarios.push(usuario);
        this.registroForm.reset();
        alert('Usuario registrado con éxito');
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      }
    );
  }
}