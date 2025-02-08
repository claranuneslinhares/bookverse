import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query = '';
  livros: any[] = [];

  constructor(private bookService: BookService) {}

  pesquisarLivros() {
    if (this.query) {
      this.bookService.buscarLivrosPorPesquisa(this.query).subscribe((data) => {
        this.livros = data.results;
      });
    }
  }
}
