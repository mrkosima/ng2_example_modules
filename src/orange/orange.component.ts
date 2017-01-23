import {Component} from '@angular/core';
import {LoggerService} from '../services/logger.service';

@Component({
    selector: 'orange-component',
    template: `
<div class='card bg-orange'>
<h3>Orange Component</h3>
<grapefruit></grapefruit>
<lime></lime>
<button type='button' class='btn btn-default' (click)='click()'>Click</button>
</div>`
})

export class OrangeComponent {

    constructor(private loggerService:LoggerService) { }

    click() {
        this.loggerService.log('Orange Clicked', 'orange');
    }

}