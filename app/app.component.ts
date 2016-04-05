import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MeetupService } from './meetup.service';
import { TechTalksComponent} from './techTalks/techTalks.component'
import { SpeakersComponent} from './speakers/speakers.component'

@Component({
    selector: 'angular-meetup',
    templateUrl: 'app/app.component.html', //Still Angular Does not support Relative Template URL Paths.
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        MeetupService
    ]
})

@RouteConfig(
    [
        {
            path: '/techTalks',
            name: 'TechTalks',
            component: TechTalksComponent,
            useAsDefault: true
        },
        {
            path: 'speakers',
            name: 'Speakers',
            component: SpeakersComponent
        }
    ]
)

export class AppComponent {
    activeTab : String;
    constructor() {
        this.activeTab = 'TechTalks'
    }
    setActiveTab(active: String){
        this.activeTab = active;
    }
    
}
