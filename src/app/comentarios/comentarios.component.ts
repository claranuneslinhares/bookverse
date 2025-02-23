import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  @Input() livroId: string = '';
  comentarios: { usuario: string, comentario: string }[] = [];
  novoComentario: string = '';

  ngOnInit() {
    if (this.livroId) {
      this.carregarComentarios();
    }
  }

  adicionarComentario() {
    if (!this.novoComentario.trim()) return;
    const usuario = 'Usuário Exemplo';
    const novo = { usuario, comentario: this.novoComentario };
    this.comentarios.push(novo);
    this.salvarComentarios();
    this.novoComentario = '';
  }

  carregarComentarios() {
    const comentariosSalvos = localStorage.getItem(`comentarios_${this.livroId}`);
    if (comentariosSalvos) {
      this.comentarios = JSON.parse(comentariosSalvos);
    }
  }

  salvarComentarios() {
    localStorage.setItem(`comentarios_${this.livroId}`, JSON.stringify(this.comentarios));
  }
}