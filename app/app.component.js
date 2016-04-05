System.register(['angular2/core', 'angular2/router', './meetup.service', './techTalks/techTalks.component', './speakers/speakers.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, meetup_service_1, techTalks_component_1, speakers_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (meetup_service_1_1) {
                meetup_service_1 = meetup_service_1_1;
            },
            function (techTalks_component_1_1) {
                techTalks_component_1 = techTalks_component_1_1;
            },
            function (speakers_component_1_1) {
                speakers_component_1 = speakers_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.activeTab = 'TechTalks';
                }
                AppComponent.prototype.setActiveTab = function (active) {
                    this.activeTab = active;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'angular-meetup',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            meetup_service_1.MeetupService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/techTalks',
                            name: 'TechTalks',
                            component: techTalks_component_1.TechTalksComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'speakers',
                            name: 'Speakers',
                            component: speakers_component_1.SpeakersComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map