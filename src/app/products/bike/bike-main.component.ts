import {Component, ViewEncapsulation} from '@angular/core';
import { BikeType } from '../bike/bike-type';

const BIKES: BikeType[] = [
  { id: 1, model: 'CBR250R', manufacturer: 'Honda' },
  { id: 2, model: 'Ninja1000RR', manufacturer: 'Kawasaki' },
  { id: 3, model: 'myTest-1', manufacturer: 'Tester' }
];

@Component({
    moduleId: module.id,
    selector: 'app-bike-main',
    templateUrl: './bike-main.component.html',
    styleUrls:  ['./bike-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ComBike { 
  title = 'Bike List (title variable)';
  bikes = BIKES;
  selectedBike: BikeType;
  onSelect(bike: BikeType): void { this.selectedBike = bike; }
}
