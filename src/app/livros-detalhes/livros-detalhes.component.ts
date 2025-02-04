import { Component } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent{
  bookId!: string;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bibliotecaService: BibliotecaService
  ) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    this.isFavorite = this.bibliotecaService.isFavorite(this.bookId);  // Alterei o nome do método aqui
  }

  addToFavorites() {
    this.bibliotecaService.addBookToFavorites(this.bookId);  // Alterei o nome do método aqui
    this.isFavorite = true;
  }

  showAlreadyFavoritedMessage(): boolean {
    return this.isFavorite;
  }
}