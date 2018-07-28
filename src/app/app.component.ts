import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'app-icon-close',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/close.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'app-icon-shape',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/shape.svg')
    );
  }
}
