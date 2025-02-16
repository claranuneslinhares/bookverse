import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { BookService, LivroGoogle } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-livros-detalhes',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './livros-detalhes.component.html',
  styleUrl: './livros-detalhes.component.css'
})
export class LivrosDetalhesComponent {
  @Input() livro: any; // Recebe os dados do livro  

  constructor(private bibliotecaService: BibliotecaService) {}

  favoritarLivro() {
    this.bibliotecaService.adicionarAosFavoritos(this.livro);
    alert('Livro favoritado!');
  }
}