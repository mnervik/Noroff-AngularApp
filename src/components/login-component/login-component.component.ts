import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  @Output() userDetailObj: EventEmitter<object> = new EventEmitter();
  form: any;

  @Input() isUsername: boolean;
  @Input() isPassword: boolean;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  public userDetails(formValues: any) {
    this.userDetailObj.emit(formValues);
  }
}
