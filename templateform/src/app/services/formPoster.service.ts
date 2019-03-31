import { Injectable } from '@angular/core';
import {Customerm } from '../models/customer-form.model';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/postemployee';

    constructor(private _http: HttpClient) {}

    postCustomer(customer: Customerm): Observable<any> {
       return this._http.post(this.url, customer);
    }
}
