import { Injectable } from 'angular2/core'
import { TECHTALKS } from './techTalks/mock-techTalks'
import {SPEAKERS} from './speakers/mock-speakers'


@Injectable()
export class MeetupService {
    getTechTalks() {
        return TECHTALKS;
    }
    
    getSpeakers()
    {
        return SPEAKERS;
    }
}

