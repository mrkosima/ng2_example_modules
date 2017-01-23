import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    name: string;

    login(name: string, pass: string): boolean {
        if (pass === 'password') {
            this.name = name;
            return true;
        }
        return false;
    }

    getName(): string {
        return this.name;
    }
}