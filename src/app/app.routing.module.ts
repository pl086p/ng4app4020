import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComCar  }      from './products/parent-child/car-main.component';
import { ComBike }      from './products/bike/bike-main.component';
import { ComMessage }  from './products/ngUI-Tab/message.component';
import { ComTabAbout }   from './main-tabs/tabAbout.component';
import { ComTabService } from './main-tabs/tabService.component';
import { ComTabNgxBs }   from './main-tabs/tabNgxBs.component';

const AppRoutes: Routes = [
    { path: 'tabAbout',  component: ComTabAbout },
    { path: 'tabNgUI',  component: ComMessage },
    { path: 'tabParentChild',   component: ComCar },
    { path: 'tabBike',  component: ComBike },
    { path: 'tabService', component: ComTabService },
    { path: 'tabNgxBs',   component: ComTabNgxBs },
    { path: '',   redirectTo: 'product4', pathMatch: 'full' },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
