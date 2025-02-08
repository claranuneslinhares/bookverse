import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentarioForm = new FormGroup({
    nome: new FormControl(''), 
    comentario: new FormControl(''), 
  });

  onSubmit() {
    console.log(this.comentarioForm.value); 
  }
}