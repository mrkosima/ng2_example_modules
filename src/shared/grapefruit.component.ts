import {Component} from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
    selector: 'grapefruit',
    template: `
<div class="card grapefruit" (click)="click()"></div>`
})

export class GrapefruitComponent {
    constructor(private loggerService:LoggerService) {
    }

    private click(){
        this.loggerService.log('Grapefruit clicked', 'orange');
    }

}