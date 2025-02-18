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
    this.livrosFavoritos = this.bibliotecaService.obterFavoritos();
  }

  removerFavorito(id: string) {
    this.bibliotecaService.removerDosFavoritos(id);
    this.carregarFavoritos(); // Atualiza a lista após remover
  }
}