import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active:Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setActive () {
    this.active = !this.active
  }

}
