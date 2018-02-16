import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'selector-com-title',
  templateUrl: './com-title.component.html',
  styleUrls: ['./com-title.component.css']
})
export class ComTitleComponent implements OnInit {
  @Input()
  comTitle: string;

  status: any = { isFirstOpen:true, isOpen: true};

  constructor() { }

  ngOnInit() {
  }

}
