import { Component, OnInit } from 'angular2/core'
import { Speaker } from './speaker'
import { MeetupService } from '../meetup.service'


@Component(
    {
        selector: 'speakers',
        templateUrl: 'app/speakers/speakers.component.html',
        styleUrls: ['app/speakers/speakers.component.css']

    }
)
export class SpeakersComponent implements OnInit{
    speakers : Speaker[];
    
    constructor(private _meetupService : MeetupService)
    {
        
    }
    
    ngOnInit()
    {
        this.populateSpeakers();
    }
    
    populateSpeakers()
    {
        this.speakers = this._meetupService.getSpeakers();
    }
}

