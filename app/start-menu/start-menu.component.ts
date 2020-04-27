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
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/logo/amberts-logo.svg'));
        // sanitizer.bypassSecurityTrustResourceUrl('https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg'));
  }

  ngOnInit() {}

}

