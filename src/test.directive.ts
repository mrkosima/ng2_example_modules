import {Directive, OnInit} from "@angular/core";
import {LoggerService} from "./services/logger.service";

@Directive({
    selector: '[test]',
    providers: [LoggerService]
})
export class TestDirective implements OnInit {

    constructor(private loggerService: LoggerService) {
    }

    ngOnInit() {
        setInterval(() => {
            this.loggerService.log('TestDirective', 'red');
        }, 1000);

    }
}