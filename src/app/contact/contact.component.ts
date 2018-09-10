import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone-validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  countries = ['', 'USA', 'Germany', 'Italy', 'France'];

  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {}

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
      country: new FormControl('', [Validators.required])
    });
  }

  revert() {
    this.contactForm.reset();
  }

  onSubmit() {
    // ...
  }

  get mobile() {
    return this.contactForm.get('mobile');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
