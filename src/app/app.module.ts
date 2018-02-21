import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material';
import { TabsModule }      from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';

// my modules with this application
import { AppRoutingModule }  from './app.routing.module';
import { ModShared } from './mod-shared/my-shared.module';
import { ModNgxBs }  from './mod-ngxBootstrap/ngxBs.module';

// Components
import { AppComponent }             from './app.component';
import { ComBike }                  from './products/bike/bike-main.component';
import { ComBikeInfo }              from './products/bike/bike-info.component';
import { ComCar }                   from './products/parent-child/car-main.component';
import { ComCarList }               from './products/parent-child/car-list.component';
import { ComCarDetail }             from './products/parent-child/car-detail.component';
import { ComChildLeft }             from './products/parent-child/child-left.component';
import { ComMessage }               from './products/ngUI-Tab/message.component';
import { ComBoat }                  from './services/boat/boat.component';
import { ComBoatDetail}             from './services/boat/boat-detail.component';
import { ComEmployee }              from './services/employee/employee.component';
import { EmployeeDetailComponent}   from './services/employee/employee-detail.component';
import { ComCustomer }              from './services/customer/customer.component';
import { CustomerDetailComponent}   from './services/customer/customer-detail.component';
import { ComTabAbout}               from './main-tabs/tabAbout.component';
import { ComTabNgxBs}               from './main-tabs/tabNgxBs.component';
import { ComTabService}             from './main-tabs/tabService.component';

@NgModule({
    declarations: [
        AppComponent,
        ComTabAbout, 
        ComBike, ComBikeInfo,
        ComCar, ComCarList, ComCarDetail, ComChildLeft,
        ComMessage,
              
        ComTabService,
        ComBoat,     ComBoatDetail,
        ComEmployee, EmployeeDetailComponent,        
        ComCustomer, CustomerDetailComponent,
        
        ComTabNgxBs
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,       
        MatTabsModule,
        AppRoutingModule,
        ModShared,
        ModNgxBs,
        TabsModule.forRoot(),
        AccordionModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
