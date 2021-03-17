import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { BookModel } from '../../../bookModel';

@Component({
  selector: 'cart-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() booksInCart: any;
  @Output() delete = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(deletedBook: any) {
    this.delete.emit(deletedBook);
  }

}
