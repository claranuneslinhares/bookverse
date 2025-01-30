import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OnInit, BookService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  implements OnInit {
    books[ ];
    constructor(private bookService: BookService) {}
    ngOninit(){
      this.bookService.getbooks()subscribeOn((data) => {
        this.books=data;
      });
      }
    }
}

