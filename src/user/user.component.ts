import {Component} from "@angular/core";
import {LoggerService} from "../services/logger.service";
import {UserService} from "../services/user.service";

@Component({
    selector: 'user-component',
    template: `
<div class="card bg-blue">
<h3>User Component : <span class="username">{{userService.name}}</span></h3>
<p><input type="text" #input value="Angular2 user"></p>
<button type="button" class="btn btn-default" (click)="click(input.value)" value="Angular2 user">Save</button>
</div>`
})

export class UserComponent {

    constructor(private userService: UserService,
                private loggerService: LoggerService) {
    }

    click(value: string) {
        this.userService.name = value;
        this.loggerService.log('Name saved', 'blue');
    }
}