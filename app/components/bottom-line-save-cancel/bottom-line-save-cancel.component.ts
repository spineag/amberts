import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bottom-line-menu',
  templateUrl: './bottom-line-save-cancel.component.html',
  styleUrls: ['./bottom-line-save-cancel.component.css']
})
export class BottomLineSaveCancelComponent implements OnInit {
  @Input() callback: Function;
 
  constructor() {}

  ngOnInit() {}

}