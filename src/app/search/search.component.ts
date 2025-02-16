import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroGoogle } from '../services/book.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  termoPesquisa: string = '';
  livros: any[] = [];

  constructor(private bookService: BookService) {}

  pesquisarLivros() {
    if (this.termoPesquisa.trim() === '') {
      return;
    }

    this.bookService.buscarLivros(this.termoPesquisa).subscribe((response) => {
      this.livros = response;
    });
  }
  
}