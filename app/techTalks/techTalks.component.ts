import { Component, OnInit } from 'angular2/core'
import { MeetupService } from '../meetup.service'
import { TechTalk } from './techTalk'

@Component(
    {
        selector: 'active-meetups',
        templateUrl: 'app/techTalks/techTalks.component.html',
        styleUrls: ['app/techTalks/techTalks.component.css']
    }
)

export class TechTalksComponent implements OnInit {
    techTalks: TechTalk[];

    constructor(private _meetupService: MeetupService) {
    }

    ngOnInit() {
        this.getTechTalks();
    }

    getTechTalks() {
        this.techTalks = this._meetupService.getTechTalks();
    }
}

