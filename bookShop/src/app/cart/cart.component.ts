import { BookModel } from './../bookModel';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() booksInCart: any;
  @Output() delete = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.booksInCart);
  }

  onDelete(deletedBook: any) {
    this.delete.emit(deletedBook);
  }

}
