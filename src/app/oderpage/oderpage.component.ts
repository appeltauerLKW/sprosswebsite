import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-oderpage',
  templateUrl: './oderpage.component.html',
  styleUrls: ['./oderpage.component.css']
})
export class OderpageComponent {
  muster:string = "";
  length:any;

  constructor(public router: Router){
  }

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
      this.router.navigate(['/confirmpage']);
    });
    
  }

  onLangClick() {
    this.length = 'lang';
    const selectedbutton = document.getElementsByClassName("e16_31");
    const otherbutton = document.getElementsByClassName("e16_38");
    this.changeSelection(selectedbutton, otherbutton);
  }
  
  onKurzClick() {
    this.length = 'kurz';
    const selectedbutton = document.getElementsByClassName("e16_38");
    const otherbutton = document.getElementsByClassName("e16_31");
    this.changeSelection(selectedbutton, otherbutton);
  }

  changeSelection(selectedbutton: any, otherbutton:any) {
    // Remove 'selected' class from all buttons
    for (let i = 0; i < otherbutton.length; i++) {
      otherbutton[i].classList.remove("selected");
    }

    // Add 'selected' class to the clicked button
    for (let i = 0; i < otherbutton.length; i++) {
      selectedbutton[i].classList.add("selected");
    }
  }

}
