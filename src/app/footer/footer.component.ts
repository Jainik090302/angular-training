import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscribe() {
    if(EmailValidator){
      alert("You are now subscriber");
    }
    else {
      alert("please enter you email");
    }
  }
}
