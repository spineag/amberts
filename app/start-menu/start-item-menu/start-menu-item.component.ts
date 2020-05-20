import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-menu-item',
  templateUrl: './start-menu-item.component.html',
  styleUrls: ['./start-menu-item.component.css']
})
export class StartMenuItemComponent implements OnInit {
  @Input() iconUrl: String;
  @Input() text: String;
  @Input() iconClass: String;   
  @Input() bgClass: String; 
  @Input() textClass: String;
  @Input() url: String; 
  
  constructor() { 
    
  }

  ngOnInit() {}

}