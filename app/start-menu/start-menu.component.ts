import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
        "amberts-logo",
        sanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/spineag/amberts/6ac5e6f09286cf4bcd75ddfab0654a0b18dbf1ed/assets/svg/logo/amberts-logo.svg'));
  }

  ngOnInit() {}

}

