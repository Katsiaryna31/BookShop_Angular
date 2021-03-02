import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { BookModel } from './../bookModel';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  @Input() book: BookModel | any;
  @Output() buy = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    this.buy.emit(this.book);
  }

}
