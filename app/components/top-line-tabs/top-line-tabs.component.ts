import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'top-line-tabs',
  templateUrl: './top-line-tabs.component.html',
  styleUrls: ['./top-line-tabs.component.css']
})
export class TopLineTabsComponent implements OnInit {
  @Input() tabs: Array<any>; // names and callbacks
  @Input() leftObjects: Array<any>;
  @Input() rightObjects: Array<any>;
  
  constructor() { 
    
  }

  ngOnInit() {}

}