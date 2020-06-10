import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'top-line',
  templateUrl: './top-line.component.html',
  styleUrls: ['./top-line.component.css']
})
export class TopLineComponent implements OnInit {
  @Input() description: String;
  @Input() icon: String;
  
  constructor() { 
    
  }

  ngOnInit() {}

}