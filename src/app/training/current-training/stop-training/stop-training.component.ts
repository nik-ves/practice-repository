import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css']
})
export class StopTrainingComponent implements OnInit {

  progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
