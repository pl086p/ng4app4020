import {Component, ViewEncapsulation} from '@angular/core';
import { ProductType } from '../product-info/product-class';

const CARS: ProductType[] = [
  { id: 1, model: 'Explorer', manufacturer: 'Ford' },
  { id: 2, model: 'Chevlet', manufacturer: 'GM' },
  { id: 3, model: 'Pilot', manufacturer: 'Honda' },
  { id: 4, model: 'Highland', manufacturer: 'Toyota' }
];

@Component({
    moduleId: module.id,
    selector: 'app-car-main',
    templateUrl: './car-main.component.html',
    styleUrls:  ['./car-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComCar { 
  pTitle = ' Master-Detail and Parent-Child (@Input, @Output)';
  pCars = CARS;
  selectedCar: ProductType;
  onSelect(car: ProductType): void { this.selectedCar = car; };

  msgFromParent = 'Hello, child!';
  msgFromChild  = '';

  printMsg(msg){
    this.msgFromChild = msg;
  }
}
