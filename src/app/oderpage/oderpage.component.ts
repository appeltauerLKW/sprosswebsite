import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
 

@Component({
  selector: 'app-oderpage',
  templateUrl: './oderpage.component.html',
  styleUrls: ['./oderpage.component.css']
})
export class OderpageComponent {
  muster:string = "";
  length:any;

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.length)

    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/sprossishop/orders';
    let body = {
      order: {
        "laenge": this.length,
        "muster": form.value.muster,
        "hauptfarbe": form.value.hauptfarbe,
        "nebenfarbe": form.value.nebenfarbe,
        "name": "ina"
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.order);
    });

  }

  onLangClick() {
    this.length = 'lang';
  }
  
  onKurzClick() {
    this.length = 'kurz';
  }

}
