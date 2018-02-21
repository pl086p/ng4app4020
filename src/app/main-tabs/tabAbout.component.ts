import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'selector-tab-about',  // <log-tab></log-tab>
  templateUrl: './tabAbout.component.html'
})
export class ComTabAbout implements OnInit {
    comTitle = '[tabAbout.component]';
    ngOnInit() { } 

}

