import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent implements OnInit{
  livro: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private bibliotecaService: BibliotecaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.buscarLivroPorId(id).subscribe((data) => {
        this.livro = data;
      });
    }
  }

  favoritarLivro() {
    this.bibliotecaService.adicionarFavorito(this.livro);
  }
}