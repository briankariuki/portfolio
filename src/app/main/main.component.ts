import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DatePipe]
})
export class MainComponent implements OnInit {
  today: number = Date.now();
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
