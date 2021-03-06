System.register(['angular2/core', '../meetup.service'], function(exports_1, context_1) {
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
    var core_1, meetup_service_1;
    var SpeakersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meetup_service_1_1) {
                meetup_service_1 = meetup_service_1_1;
            }],
        execute: function() {
            SpeakersComponent = (function () {
                function SpeakersComponent(_meetupService) {
                    this._meetupService = _meetupService;
                }
                SpeakersComponent.prototype.ngOnInit = function () {
                    this.populateSpeakers();
                };
                SpeakersComponent.prototype.populateSpeakers = function () {
                    this.speakers = this._meetupService.getSpeakers();
                };
                SpeakersComponent = __decorate([
                    core_1.Component({
                        selector: 'speakers',
                        templateUrl: 'app/speakers/speakers.component.html',
                        styleUrls: ['app/speakers/speakers.component.css']
                    }), 
                    __metadata('design:paramtypes', [meetup_service_1.MeetupService])
                ], SpeakersComponent);
                return SpeakersComponent;
            }());
            exports_1("SpeakersComponent", SpeakersComponent);
        }
    }
});
//# sourceMappingURL=speakers.component.js.map