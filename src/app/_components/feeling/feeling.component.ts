import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling',
  templateUrl: './feeling.component.html',
  styleUrls: ['./feeling.component.scss']
})
export class FeelingComponent implements OnInit {
  today = new Date()
  selectedMood = ''
  constructor() { }

  ngOnInit() {
  }
  submit(){}
}
