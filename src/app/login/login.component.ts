import { Component } from '@angular/core';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserLoginService } from '../services/user-login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';

  constructor(private userLogin: UserLoginService) {}

  fazerLogin() {
    if (this.usuario.trim()) {
      this.userLogin.login(this.usuario);
      alert('Login realizado com sucesso!');
    } else {
      alert('Digite um nome de usuário válido.');
    }
  }
}

