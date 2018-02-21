import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ngx-bootstrap-tab',
    templateUrl: './ngx-tab.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class NgxTabComponent { 
  alertMe(): void {
    setTimeout(function(): void {
      alert("You've selected the alert tab!");
    });
  }
}
