import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComMenuAbout  }      from './menu-content/aboutContent.component';
import { ComMenu2Cont  }      from './menu-content/menu2Content.component';
import { ComMenu3Cont  }      from './menu-content/menu3Content.component';
import { ComMenuPureBs }      from './menu-content/pureBsContent.component';

const ngxBsRoutes: Routes = [
    { path: 'tabNgxBs/link-About',      component: ComMenuAbout },
    { path: 'tabNgxBs/link-menu2Cont',  component: ComMenu2Cont },
    { path: 'tabNgxBs/link-menu3Cont',  component: ComMenu3Cont, outlet: 'aux' },
    { path: 'tabNgxBs/link-PureBs',     component: ComMenuPureBs },
    { path: '',   redirectTo: 'product4', pathMatch: 'full' },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ngxBsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ngxBsRoutingModule { }
