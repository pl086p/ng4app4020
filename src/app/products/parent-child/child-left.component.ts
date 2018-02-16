import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'selector-child-left',
    templateUrl: './child-left.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ComChildLeft { 
    @Input()
    msgFromParent: string;

    @Output()
    sendMsgEvent = new EventEmitter<string>();
    msgFromChild: string;

    sendMsg() {
        console.log(this.msgFromChild);
        this.sendMsgEvent.emit(this.msgFromChild);
    }
}
