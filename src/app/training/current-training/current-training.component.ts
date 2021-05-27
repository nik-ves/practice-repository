import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: any; // Defaultna vrednost timer je any, tako da je u ovom slucaju moglo da se napise samo timer;

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(() => { // Autoinkrementiranje progress bara na 1000ms bez ogranicenja dokle da ide
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 500)
  }

  onStop() {
    clearInterval(this.timer);
  }

}
