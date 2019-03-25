import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _productService: ProductService,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['/product']);
    }
}
