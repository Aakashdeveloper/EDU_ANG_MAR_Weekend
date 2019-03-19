import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'MyUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, typeo: string): string {
        if (typeo === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}
