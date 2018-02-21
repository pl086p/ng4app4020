import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'selector-ngxBsMenu',
  templateUrl: './menuNavi.component.html',
  styleUrls: ['./menuNavi.component.css']
})
export class ComMenuNavi implements OnInit {

    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            { label: 'About', link: './link-About', index: 1 },
            { label: 'Menu2', link: './link-menu2Cont', index: 2 },
            { label: 'Menu3', link: './link-menu3Cont', index: 3 }, 
            { label: 'Pure Bs', link: './link-PureBs', index: 3 }, 
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
