import { Component, OnInit } from '@angular/core';
import { ActionService } from '../shared/service/action.service';
import { Action } from '../shared/models/action';

@Component({
  selector: 'page-list-events',
  templateUrl: './page-list-events.component.html',
  styleUrls: ['./page-list-events.component.css']
})
export class PageListEventsComponent implements OnInit {
  private arActions:Array<Action>;
  
  constructor(private actions:ActionService) { }

  ngOnInit() {
    this.arActions = this.actions.getActionsLocal();
  }

}
