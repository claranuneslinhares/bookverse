import { Component, OnInit} from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [ ],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  favorites: any[] = [];

  constructor(private bibliotecaService: BibliotecaService) {
    this.favorites = this.bibliotecaService.getFavoriteBooks();
  }

  hasFavorites(): boolean {
    return this.favorites.length > 0;
  }

  getFavoriteBooks(): any[] {
    return this.favorites;
  }
}