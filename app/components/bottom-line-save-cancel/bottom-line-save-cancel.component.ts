import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'bottom-line-save-cancel',
  templateUrl: './bottom-line-save-cancel.component.html',
  styleUrls: ['./bottom-line-save-cancel.component.css']
})
export class BottomLineSaveCancelComponent implements OnInit {
  @Output() updateActionsList =  new EventEmitter();

  constructor(private location: Location) {}

  ngOnInit() {}

  cancelF(){ this.location.back(); }

  addNewAction(){
    //... save new action

    this.updateActionsList.emit();
  }

}