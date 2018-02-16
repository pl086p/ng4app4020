import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComCar  }      from './products/parent-child/car-main.component';
import { ComBike }      from './products/bike/bike-main.component';
import { BootstrapComponent } from './products/bootstrap/bootstrap.component';
import { ComMessage }  from './products/ngUI-Tab/message.component';
import { ComBoat }      from './services/boat/boat.component';
import { ComEmployee }  from './services/employee/employee.component';
import { ComCustomer }  from './services/customer/customer.component';


const mainRoutes: Routes = [
    { path: 'tabNgUI',  component: ComMessage },
    { path: 'tabBoat',  component: ComBoat },
    { path: 'tabParentChild',   component: ComCar },
    { path: 'tabBike',  component: ComBike },
    { path: 'tabBootstrap', component: BootstrapComponent },
    { path: 'tabEmpApi',  component: ComEmployee },
    { path: 'tabCustApi', component: ComCustomer },
    { path: '',   redirectTo: 'product4', pathMatch: 'full' },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
