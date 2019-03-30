import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';


@Injectable()

export class RouterGaurdService implements CanActivate {

    constructor(private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('invalid id');
            this._router.navigate(['/product']);
            return false;
        }
        return true;
    }
}
