import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class LoggerService {
    private id: number = 0;

    constructor(private userService: UserService) { }

    log(message: string, color: string): void {
        console.log(`%c ${++this.id}. [${this.userService.name}] ${message}`, `color : ${color}`);
    }
}