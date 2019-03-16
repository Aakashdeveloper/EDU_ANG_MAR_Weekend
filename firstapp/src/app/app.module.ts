import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    // All the module declare here
    imports : [
        BrowserModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
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
