import { Component, OnInit} from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroGoogle } from '../services/book.service';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [ CommonModule, FormsModule, ],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent implements OnInit {
  livrosFavoritos: any[] = [];

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit() {
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    this.livrosFavoritos = favoritos ? JSON.parse(favoritos) : [];
  }

  removerFavorito(id: string) {
    this.livrosFavoritos = this.livrosFavoritos.filter(livro => livro.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(this.livrosFavoritos));
  }
}