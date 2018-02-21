import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'selector-tab-service',  // <log-tab></log-tab>
  templateUrl: './tabService.component.html'
})
export class ComTabService implements OnInit {
    comTitle = '[ComTabService] Title';

    alertMe(): void {
      setTimeout(function(): void {
        alert("You've clicked the [alertMe] tab!");
      });
    };

    ngOnInit() { } 

}

