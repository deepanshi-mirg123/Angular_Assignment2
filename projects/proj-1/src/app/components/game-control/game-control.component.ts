import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit{
  @Output() increamentOnEachInterval = new EventEmitter<number>(); //outputting this to app component
  interval: string | number | NodeJS.Timeout | undefined;
  previousNum=0;

  constructor() { }

  ngOnInit() {
  }
// method called on click of start button
  onStart(){
this.interval= setInterval(()=> {
this.increamentOnEachInterval.emit(this.previousNum+1);
this.previousNum++;
},1000)
  }

  onStop(){
    clearInterval(this.interval);
  }

}
