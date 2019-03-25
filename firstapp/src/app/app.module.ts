// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Pipes
import { MyUpperPipe } from './product/nameUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { ProductSearch } from './product/productSearch.pipe';

// components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './shared/star.component';
import { HomeComponent } from './Home/home.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { NotFoundComponent } from './shared/NotFound.component';

// Service
import { ProductService } from './product/product.service';


@NgModule({
    // All the module declare here
    imports : [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'product', component: ProductComponent},
            {path: 'product/:id', component: ProductDetailComponent},
            {path: 'order', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: '**', component: NotFoundComponent }
        ])
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        StarComponent,
        HomeComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
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
