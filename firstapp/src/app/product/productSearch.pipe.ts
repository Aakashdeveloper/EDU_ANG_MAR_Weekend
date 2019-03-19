import { Pipe, PipeTransform } from '@angular/core';
import { IProduct} from './product.model';

@Pipe({
    name: 'filterProduct'
})

export class ProductSearch implements PipeTransform {
    transform(value: IProduct[], userText: string ) {
        userText = userText ? userText.toLowerCase() : null;
        return userText ? value.filter((product) =>
            (product.productName.toLowerCase().indexOf(userText) !== -1) ||
            product.productCode.toLowerCase().indexOf(userText) !== -1) : value;
    }
}



/*

var ages = [32, 33, 16, 40];



function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(
  (age) => {return age >= 18;});
}
*/
