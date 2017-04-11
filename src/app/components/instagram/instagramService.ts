import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class InstagramService {
    private _instaResponse: InstagramResponse;
    private _instagramURL: string = 'https://www.instagram.com/';
    private _instagramJsonAppend: string = '/?__a=1';


    constructor(private _http: Http) {
    }

    getInstaFeed(nextCursor: string, username: string): Observable<InstagramResponse> {
        if (typeof nextCursor != 'undefined' && nextCursor){
            return this._http.get(this._instagramURL + username + this._instagramJsonAppend + '&max_id=' + nextCursor)
                             .map((resp: Response) => resp.json());
        }
        else {
            return this._http.get(this._instagramURL + username + this._instagramJsonAppend)
                             .map((resp: Response) => resp.json());
        }    
    }
}

export interface Follows {
    count: number;
}

export interface FollowedBy {
    count: number;
}

export interface PageInfo {
    has_next_page: boolean;
    end_cursor: string;
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface Owner {
    id: string;
}

export interface Likes {
    count: number;
}

export interface Comments {
    count: number;
}

export interface Node {
    thumbnail_src: string;
    dimensions: Dimensions;
    date: number;
    is_video: boolean;
    code: string;
    comments_disabled: boolean;
    id: string;
    display_src: string;
    caption: string;
    owner: Owner;
    __typename: string;
    likes: Likes;
    comments: Comments;
    video_views?: number;
}

export interface Media {
    page_info: PageInfo;
    count: number;
    nodes: Node[];
}

export interface User {
    blocked_by_viewer: boolean;
    username: string;
    is_verified: boolean;
    follows: Follows;
    followed_by: FollowedBy;
    has_requested_viewer: boolean;
    country_block: boolean;
    followed_by_viewer: boolean;
    external_url: string;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    is_private: boolean;
    has_blocked_viewer: boolean;
    connected_fb_page?: any;
    follows_viewer: boolean;
    requested_by_viewer: boolean;
    external_url_linkshimmed: string;
    biography: string;
    full_name: string;
    media: Media;
    id: string;
}

export interface InstagramResponse {
    logging_page_id: string;
    user: User;
}