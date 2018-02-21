import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-bootstrap',
    templateUrl: './bootstrap.component.html',
    styleUrls: ['./bootstrap.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BootstrapComponent { 
    comTitle = '[bootstrap.component]: ngx-bootstrap (TabsModule)';
}
