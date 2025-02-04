import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface Book {
  id: string;
  title: string;
  author: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  books: Book[] = [];

  constructor() {
    // Simulação de dados
    this.books = [
      { id: '1', title: '1984', author: 'George Orwell' },
      { id: '2', title: 'Dom Casmurro', author: 'Machado de Assis' },
    ];
  }
}