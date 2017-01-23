import {Injectable, Optional} from "@angular/core";
import {AppConfig} from "../core/app.config";

@Injectable()
export class UserService {
    private _name: string = 'NoName';

    constructor(@Optional() appConfig: AppConfig) {
        if (appConfig) {
            this._name = appConfig.userName;
        }
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}