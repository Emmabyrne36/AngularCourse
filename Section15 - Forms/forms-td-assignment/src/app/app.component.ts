import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm') sgnForm: NgForm;
  submitted = false;
  result = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    console.log(this.sgnForm.value);
    this.submitted = true;
    this.result.email = this.sgnForm.value.email;
    this.result.subscription = this.sgnForm.value.subscription;
    this.result.password = this.sgnForm.value.password;

    this.sgnForm.reset();
  }
}
