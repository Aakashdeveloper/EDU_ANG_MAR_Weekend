import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/nameUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';

@NgModule({
    // All the module declare here
    imports : [
        BrowserModule,
        FormsModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All Service here
    providers: []
})

export class AppModule {

}
