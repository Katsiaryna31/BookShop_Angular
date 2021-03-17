import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModuleModule } from '../shared-module/shared-module.module';

import { BookComponentComponent } from './book-component/book-component.component';
import { BookShopComponent } from './book-shop/book-shop.component';



@NgModule({
  declarations: [
    BookComponentComponent,
    BookShopComponent
  ],
  imports: [
    SharedModuleModule,
    BrowserModule,
  ],
  exports: [
    BookComponentComponent,
    BookShopComponent
  ],

  bootstrap: [BookShopComponent]
})
export class BooksModule { }

