import { Component, OnInit} from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroGoogle } from '../services/book.service';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [ CommonModule, FormsModule, ],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent implements OnInit {
  livrosFavoritos: any[] = []; 

  constructor(
    private bibliotecaService: BibliotecaService,
    private userLogin: UserLoginService  // Injetando o serviço de login
  ) {}

  ngOnInit() {
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    const usuario = this.userLogin.getUsuarioLogado();
    if (usuario) {
      this.livrosFavoritos = this.bibliotecaService.listarFavoritos(usuario);
    } else {
      this.livrosFavoritos = [];  
    }
  }

  removerFavorito(livroId: string) {
    const usuario = this.userLogin.getUsuarioLogado();
    if (usuario) {
      this.bibliotecaService.removerDosFavoritos(livroId, usuario);
      this.carregarFavoritos();  
    } else {
      alert('Você precisa estar logado para remover um livro dos favoritos.');
    }
  }
}