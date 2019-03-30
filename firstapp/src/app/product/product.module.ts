import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './nameUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductSearch } from './productSearch.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearch,
        ProductDetailComponent
    ],
    providers : [
        ProductService
    ]
})

export class ProductModule {

}
