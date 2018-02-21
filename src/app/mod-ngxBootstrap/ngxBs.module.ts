import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { MatTabsModule } from '@angular/material';
import { ngxBsRoutingModule }  from './ngxBs.routing.module';

import { ComNgxBs }      from './ngxBs.component';
import { ComMenuNavi }   from './menu-navi/menuNavi.component';  
import { ComMenuAbout }  from './menu-content/aboutContent.component';
import { ComMenu2Cont }  from './menu-content/menu2Content.component';
import { ComMenu3Cont }  from './menu-content/menu3Content.component';
import { ComMenuPureBs } from './menu-content/pureBsContent.component';


// import { ComMenuNavi } from './menu-navi/menuNavi.component';

@NgModule({
  declarations: [
    ComNgxBs,
    ComMenuNavi, 
    ComMenuAbout, ComMenu2Cont, ComMenu3Cont, ComMenuPureBs
  ],  
  imports: [
    CommonModule,
    MatTabsModule,
    ngxBsRoutingModule,
    AccordionModule.forRoot()
  ],
  exports: [ComNgxBs],
  bootstrap: [ComNgxBs]
})
export class ModNgxBs { }
