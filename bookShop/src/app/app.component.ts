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
  numberOfBooks: number = 1;

  onBuy(boughtBook: any) {
    let boughtedIndex = this.boughtBooks.indexOf(boughtBook);
    if (boughtedIndex === -1) {
      boughtBook.numberOfBooks = 1;
      this.boughtBooks.push(boughtBook);
    } else {
      boughtBook.numberOfBooks ++;
    }
    
  }

  onDelete(deletedBook: any) {
    let deletedIndex = this.boughtBooks.indexOf(deletedBook);
    this.boughtBooks.splice(deletedIndex, 1);
  }
}
