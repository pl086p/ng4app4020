import { Component, OnInit, Input } from '@angular/core';
import { CarType } from './car-type';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class ComCarDetail implements OnInit {

  @Input() car: CarType;

  constructor() { }

  ngOnInit() { } 

}
