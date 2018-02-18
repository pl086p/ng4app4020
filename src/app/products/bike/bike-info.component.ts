import { Component, OnInit, Input } from '@angular/core';
import { BikeType } from './bike-type';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class ComBikeInfo implements OnInit {

  @Input() bike: BikeType;

  constructor() { }

  ngOnInit() { } 

}
