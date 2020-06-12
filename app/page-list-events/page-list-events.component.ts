import { Component, OnInit } from '@angular/core';
import { ActionService } from '../shared/service/action.service';

@Component({
  selector: 'page-list-events',
  templateUrl: './page-list-events.component.html',
  styleUrls: ['./page-list-events.component.css']
})
export class PageListEventsComponent implements OnInit {

  constructor(private actions:ActionService) { }

  ngOnInit() {}

}
