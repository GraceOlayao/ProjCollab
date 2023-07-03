import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent {
  constructor() {}
  ngOnInit(): void {}

  user_records: any[] = [];
  data = {
    fn: '',
    ln: '',
    gender: '',
    Add: '',
    email: '',
    un: '',
    pass: '',
  };
  doRegistration(Values: any) {
   this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    if (
      this.user_records.some((v) => {
        return v.email == this.data.email;
      })
    ) {
      alert('Duplicate Data');
    } else {
      this.user_records.push(this.data);
      localStorage.setItem('users', JSON.stringify(this.user_records));
      alert(
        'Hi ' +
          this.data.fn +
          ' registration done, proceed to Login Page. Thank you!'
      );
    }
  }
}
