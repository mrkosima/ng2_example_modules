import {Component} from "@angular/core";
import {LoggerService} from "../services/logger.service";

@Component({
    selector: 'lime',
    template: `
<div class="card lime" (click)="click()"></div>`
})

export class LimeComponent {
    constructor(private loggerService:LoggerService) {
    }

    private click(){
        this.loggerService.log('Lime clicked', 'green');
    }

}