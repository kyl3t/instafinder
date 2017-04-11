import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'instacard',
    templateUrl: './instagramcard.component.html',
    styleUrls: ['./instagramcard.component.css']
})
export class InstagramCardComponent implements OnInit {

    @Input() card: any;

    ngOnInit() {
    }
}