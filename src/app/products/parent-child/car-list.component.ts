import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CarType } from './car-type';

@Component({
    moduleId: module.id,
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls:  ['./car-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComCarList { 
  @Input('pTitle') title: String;
  @Input('pCars')  pCars: CarType;
}
