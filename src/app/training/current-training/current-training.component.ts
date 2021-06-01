import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../current-training/stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: any; // Defaultna vrednost timer je any, tako da je u ovom slucaju moglo da se napise samo timer;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.timer = setInterval(() => { // Autoinkrementiranje progress bara na 1000ms bez ogranicenja dokle da ide
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        clearInterval(this.timer)
      } else {
        this.onResume()
      }
    })
  } 

  onResume() {
    this.timer = setInterval(() => { // Autoinkrementiranje progress bara na 1000ms bez ogranicenja dokle da ide
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }


}
