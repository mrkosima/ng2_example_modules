import {Component} from "@angular/core";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-title',
    template: `
<h2>Hello <span>{{userService.name}}</span></h2>
`
})

export class AppTitleComponent {
    constructor(private userService: UserService) {
    }

}