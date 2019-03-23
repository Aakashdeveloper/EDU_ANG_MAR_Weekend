import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';


@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple', 'h4{color:red}']
    styleUrls: ['./product.component.css'],
    styles: [
        `.onlineClass{
            color:red}`
    ],
    // providers: [ProductService]
})

export class ProductComponent implements OnInit {
    mainHeading: String = '****Product List****';
    localval = localStorage.getItem('outval');
    title: String = 'Filter By:=>';
    OutStr: String = 'Number of product Filter:=>';
    userInput: String;
    users: any[] = ['John', 'Mark', 'Shmmy', 'Pooja', 'Aakash'];
    showImage: Boolean = false;
    imageWidth: Number = 70;
    serverStatus: String = 'offline';
    // imgUrl: String = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png";

    constructor(private _productService: ProductService) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'offline';
    }

    products: IProduct[];

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string) {
        this.mainHeading = '~~~~~Product List~~~~~  ' + message;
    }
}
