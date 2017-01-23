import {Component} from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
    selector: 'green-component',
    template: `
<div class="card bg-green">
<h3>Green Component</h3>
<lime></lime>
<grapefruit></grapefruit>
<button type="button" class="btn btn-default" (click)="click()">Click</button>
</div>`
})

export class GreenComponent {

    constructor(private loggerService:LoggerService) { }

    click() {
        this.loggerService.log('Green Clicked', 'green');
    }

}