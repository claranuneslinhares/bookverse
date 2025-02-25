import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService, } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule, ComentariosComponent],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent implements OnInit {
  livro: any;
  favorito: boolean = false;
  favoritoAdicionado: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private bibliotecaService: BibliotecaService,
    private userLogin: UserLoginService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getLivroGoogle(id).subscribe((response) => {
        this.livro = response;

        const usuario = this.userLogin.getUsuarioLogado();
        if (usuario) {
          this.favorito = this.bibliotecaService.isFavorito(this.livro.id, usuario);
        } else {
          this.favorito = false;
        }
      });
    }
  }

  toggleFavorito(): void {
    const usuario = this.userLogin.getUsuarioLogado();
    if (!usuario) {
      alert('Você precisa estar logado para favoritar um livro.');
      return;
    }

    if (this.favorito) {
      this.bibliotecaService.removerDosFavoritos(this.livro.id, usuario);
    } else {
      this.bibliotecaService.adicionarFavorito(this.livro, usuario);
    }

    this.favorito = !this.favorito;
    this.favoritoAdicionado = !this.favoritoAdicionado; // Exibe a mensagem

    // Exibe a mensagem por 2 segundos
    setTimeout(() => {
      this.favoritoAdicionado = false;
    }, 2000);
  }
}

