import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'instagramuser',
    templateUrl: './instagramuser.component.html',
    styleUrls: ['./instagramuser.component.css']
})
export class InstagramUserComponent implements OnInit {

    @Input() user: any;

    ngOnInit() {
    }
}