// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { MyUpperPipe } from './product/nameUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';

// components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star.component';

// Service
import { ProductService } from './product/product.service';


@NgModule({
    // All the module declare here
    imports : [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        StarComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All Service here
    providers: [
        ProductService
    ]
})

export class AppModule {

}
