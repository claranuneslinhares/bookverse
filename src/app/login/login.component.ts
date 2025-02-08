import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value); 
  }
}
