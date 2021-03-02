import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BOOKS } from './../mock-books';
import { BookModel } from './../bookModel';

@Component({
  selector: 'app-book-shop',
  templateUrl: './book-shop.component.html',
  styleUrls: ['./book-shop.component.css']
})
export class BookShopComponent implements OnInit {
  @Output() buy = new EventEmitter<BookModel>();

  book: BookModel| any;
  books = BOOKS;

  constructor() { }

  ngOnInit(): void {
    
  }

  onBuy(boughtBook: any) {
    this.buy.emit(boughtBook);
  }
}
