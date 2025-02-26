import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';


@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  @Input() livroId: string = ''; 
  usuario: string | null = null;
  avaliacao: number = 0;
  comentario: string = '';
  comentarios: { usuario: string, avaliacao: number, comentario: string }[] = [];
  mediaAvaliacao: number = 0;

  constructor(private userLogin: UserLoginService) {}

  ngOnInit() {
    this.usuario = this.userLogin.getUsuarioLogado();
    this.carregarComentarios();
  }

  salvarAvaliacao() {
    if (!this.livroId || !this.usuario) {
      alert('Você precisa estar logado para avaliar.');
      return;
    }

    const novoComentario = {
      usuario: this.usuario,
      avaliacao: this.avaliacao,
      comentario: this.comentario
    };

    let comentariosLivro = JSON.parse(localStorage.getItem(`comentarios-${this.livroId}`) || '[]');
    comentariosLivro.push(novoComentario);
    localStorage.setItem(`comentarios-${this.livroId}`, JSON.stringify(comentariosLivro));

    this.comentarios = comentariosLivro;
    this.atualizarMediaAvaliacao();
    this.comentario = '';
    this.avaliacao = 0;
  }

  carregarComentarios() {
    if (!this.livroId) return;
    this.comentarios = JSON.parse(localStorage.getItem(`comentarios-${this.livroId}`) || '[]');
    this.atualizarMediaAvaliacao();
  }

  atualizarMediaAvaliacao() {
    if (this.comentarios.length === 0) {
      this.mediaAvaliacao = 0;
      return;
    }

    const soma = this.comentarios.reduce((total, c) => total + c.avaliacao, 0);
    this.mediaAvaliacao = soma / this.comentarios.length;
  }
}
