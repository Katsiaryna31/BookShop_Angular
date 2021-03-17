import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BookModel } from '../../../bookModel';

@Component({
  selector: 'cart-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() book: BookModel | any;
  @Output() delete = new EventEmitter<BookModel>();

  constructor() { }

  numberOfBooks: number = 1;

  ngOnInit(): void {
  }

  addBook() {
    this.numberOfBooks++;
  }

  deleteBook() {
    this.numberOfBooks--;
    if (this.numberOfBooks === 0) {
      this.delete.emit(this.book);
    }
  }

}
