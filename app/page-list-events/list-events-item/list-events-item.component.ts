import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../shared/models/action';
import { Club } from '../../shared/models/club';
import { ClubService } from '../../shared/service/club.service';
import { actionTypes } from '../../shared/static/objects';

@Component({
  selector: 'list-events-item',
  templateUrl: './list-events-item.component.html',
  styleUrls: ['./list-events-item.component.css']
})
export class ListEventsItemComponent implements OnInit {
  @Input() action: Action;
  private club:Club;

  constructor(private clubs:ClubService) {}

  ngOnInit() {
    this.club = this.clubs.getClubById(this.action.ownerClubId);
    console.log(this.club);
  }

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