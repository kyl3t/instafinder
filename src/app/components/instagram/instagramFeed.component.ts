import { Component, OnInit, OnChanges } from '@angular/core';
import { InstagramCardComponent } from './instagramCard.component';
import { Node, InstagramService, InstagramResponse, User } from './instagramService';

@Component({
    selector: 'instagramfeed',
    templateUrl: './instagramFeed.component.html',
    styleUrls: ['./instagramfeed.component.css'],
    providers: [InstagramService],

})
export class InstagramFeedComponent implements OnInit, OnChanges {
    instagramCards: Node[];
    instagramUser: User;
    username: string = 'champagnepapi';
    nextCursor: string;

    constructor(private _instagramService: InstagramService) { }

    ngOnInit() { 
        this.updateCards();
    }

    ngOnChanges(){
        //this.updateCards();
    }

    updateCards(){
        this._instagramService.getInstaFeed(this.nextCursor, this.username)
        .subscribe(result => this.processResponse(result));
        
    }

    loadMore() {
        this._instagramService.getInstaFeed(this.nextCursor, this.username)
        .subscribe(result => this.processMoreResponse(result));
    }

    processResponse(result: InstagramResponse){
        this.nextCursor = result.user.media.page_info.end_cursor;
        this.instagramCards = result.user.media.nodes;
        this.instagramUser = result.user;
    }

    processMoreResponse(result: InstagramResponse){
        this.nextCursor = result.user.media.page_info.end_cursor;
        this.instagramCards = this.instagramCards.concat(result.user.media.nodes);
    }
}