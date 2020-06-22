import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-create-event',
  templateUrl: './page-create-event.component.html',
  styleUrls: ['./page-create-event.component.css']
})
export class PageCreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPressKey(event:any):void{
    let el:HTMLInputElement = event.target, counter:HTMLSpanElement = document.querySelector('#'+el.name+'_counter');
    counter.innerText=el.value.length+'/'+el.maxLength;
  }

  onFocus(event:any):void{
    let el:HTMLInputElement = event.target, counter:HTMLSpanElement = document.querySelector('#'+el.name+'_counter');
    counter.hidden=false;
    if (el.name=='event_long') el.style.height='30vh';
  }

  onFocusOut(event:any):void{
    let el:HTMLInputElement = event.target, counter:HTMLSpanElement = document.querySelector('#'+el.name+'_counter');
    counter.hidden=true;
    if (el.name=='event_long') el.style.height='5vh';
  }

}
