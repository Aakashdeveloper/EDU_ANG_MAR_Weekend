// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';

// components
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { HomeComponent } from './Home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MusicModuleModule } from './music/music-module.module';



@NgModule({
    // All the module declare here
    imports : [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule,
        MusicModuleModule
    ],

    // All the component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent,
        MoviesComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All Service here
    providers: [ ]
})

export class AppModule {}
