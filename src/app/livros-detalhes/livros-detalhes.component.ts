import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService, LivroGoogle } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent implements OnInit {
  livro: any = null;

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
      });
    }
  }

  favoritarLivro(): void {
    if (this.livro) {
      this.bibliotecaService.adicionarAosFavoritos(this.livro);
      alert('Livro adicionado aos favoritos! 📚');
    }
  }
}