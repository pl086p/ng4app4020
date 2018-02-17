import { Component, OnInit, Input } from '@angular/core';
import { Bike } from './bike';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class ComBikeInfo implements OnInit {

  @Input() bike: Bike;

  constructor() { }

  ngOnInit() { } 

}
