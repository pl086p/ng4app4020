// Import
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// component decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css']
})

// Component class
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            { label: 'About',     link: './tabAbout', index: 1 },
            { label: 'Bike',      link: './tabBike', index: 2 },
            { label: 'ngUI',      link: './tabNgUI',index: 4 },  
            { label: 'Parent-Child', link: './tabParentChild',  index: 5 },
            { label: 'Service',   link: './tabService',index: 8 },      
            { label: 'Ngx-Bs',    link: './tabNgxBs',index: 9 },       
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
