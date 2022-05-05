import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-username',
  templateUrl: './reset-username.component.html'
})

export class ResetUsernameComponent implements OnInit {
  userName = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}