import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosDetalhesComponent } from './livros-detalhes/livros-detalhes.component';
import { SearchComponent } from './search/search.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LoginComponent } from './login/login.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro/:id', component: LivrosDetalhesComponent },
  { path: 'pesquisa', component: SearchComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'comentarios/:id', component: ComentariosComponent }
];

