import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../shared/models/action';
import { actionTypes } from '../../shared/static/objects';

@Component({
  selector: 'list-events-item',
  templateUrl: './list-events-item.component.html',
  styleUrls: ['./list-events-item.component.css']
})
export class ListEventsItemComponent implements OnInit {
  @Input() action: Action;

  constructor() { }

  ngOnInit() { }

  getEventIcon(){
    for (let i:number=0; i<actionTypes.length;i++){
      if (actionTypes[i].id==this.action.type) {
        if (actionTypes[i].typeIcon=='material') return actionTypes[i].icon;
        break;
      }
    }
    return 'supervisor_account';
  }

}