import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})

export class DisplayDetailsComponent implements OnInit {
  displayDetails = false;
  textButton = 'Display Details';
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    if (this.displayDetails) {
      this.displayDetails = false;
      this.textButton = 'Display Details';
    } else {
      this.displayDetails = true;
      this.textButton = 'Hide Details';
    }

    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }
}
