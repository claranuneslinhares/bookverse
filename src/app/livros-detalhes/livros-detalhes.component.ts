import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService, } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from '../comentarios/comentarios.component';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule, ComentariosComponent],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent implements OnInit {
  livro: any = null;
  favorito: boolean = false;
  avaliacao: number = 0;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private bibliotecaService: BibliotecaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Captura o ID da URL
    if (id) {
      this.bookService.getLivroGoogle(id).subscribe((response) => {
        this.livro = response;
        this.favorito = this.bibliotecaService.isFavorito(this.livro.id);
        this.avaliacao = this.bibliotecaService.getAvaliacao(this.livro.id) || 0;
      });
    }
  }

  toggleFavorito() {
    if (this.favorito) {
      this.bibliotecaService.removerFavorito(this.livro.id);
    } else {
      this.bibliotecaService.adicionarFavorito(this.livro);
    }
    this.favorito = !this.favorito;
  }
  salvarAvaliacao() {
    this.bibliotecaService.salvarAvaliacao(this.livro.id, this.avaliacao);
  }
}

