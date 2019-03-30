import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { RouterGaurdService } from './product/router-gaurds.service';
import { MusicComponent } from './music/music.component';


const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', canActivate: [RouterGaurdService], component: ProductDetailComponent},
    {path: 'order', component: OrderComponent},
    {path: 'music', component: MusicComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers: [RouterGaurdService],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
