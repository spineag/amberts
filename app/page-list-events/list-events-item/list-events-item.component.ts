import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../shared/models/action';

@Component({
  selector: 'list-events-item',
  templateUrl: './list-events-item.component.html',
  styleUrls: ['./list-events-item.component.css']
})
export class ListEventsItemComponent implements OnInit {
  @Input() action: Action;

  constructor() { }

  ngOnInit() { }

}