import { Component, OnInit} from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  biblioteca: any[] = [];

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit() {
    this.biblioteca = this.bibliotecaService.obterFavoritos();
  }

  removerFavorito(id: string) {
    this.bibliotecaService.removerFavorito(id);
    this.biblioteca = this.bibliotecaService.obterFavoritos();
  }
}