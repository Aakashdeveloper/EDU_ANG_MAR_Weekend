import { Component, OnInit } from '@angular/core';
import { Customerm } from '../models/customer-form.model';
import {NgForm} from '@angular/forms';
import { FormPosterService } from '../services/formPoster.service';

@Component({
  selector: 'app-cutsomer-form',
  templateUrl: './cutsomer-form.component.html',
  styleUrls: ['./cutsomer-form.component.css']
})
export class CutsomerFormComponent implements OnInit {

  langauages: any[] = ['Angular', 'Go', 'Python', 'Node'];
  model = new Customerm('John', 'Andy', 'a@a.com', '' , true, 'male', 'Angular');
  hasCodeLangError: Boolean = false;

  constructor(private _formPosterService: FormPosterService) { }

  firstToUpper(value: string) {
    if (value.length > 0) {
      this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstname = value;
    }
  }

  validateCodelang(event): void {
    if (this.model.codelang === 'default') {
      this.hasCodeLangError = true;
    } else {
      this.hasCodeLangError = false;
    }
  }
  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    this._formPosterService.postCustomer(form.value)
      .subscribe((res) =>  console.log(`Post Success ${res}`));
  }

}
