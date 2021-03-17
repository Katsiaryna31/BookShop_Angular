import { Component } from '@angular/core';
import { BookModel } from './bookModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Book Shop';

  boughtBooks : BookModel [] = [];

  onBuy(boughtBook: any) {
    this.boughtBooks.push(boughtBook);
  }

  onDelete(deletedBook: any) {
    let deletedIndex = this.boughtBooks.indexOf(deletedBook);
    this.boughtBooks.splice(deletedIndex, 1);
  }
}
