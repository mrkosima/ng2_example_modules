import {NgModule, SkipSelf, Optional, ModuleWithProviders, Provider} from "@angular/core";
import {UserService} from "../services/user.service";
import {LoggerService} from "../services/logger.service";
import {AppTitleComponent} from "./app-title.component";
import {AppConfig} from "./app.config";

@NgModule({
    declarations: [
        AppTitleComponent
    ],
    exports: [
        AppTitleComponent
    ]
})
export class CoreModule {

    static forRoot(appConfig: AppConfig): ModuleWithProviders {
        let providers: Provider[] = [
            UserService,
            LoggerService
        ];

        providers.push({
            provide: AppConfig,
            useValue: appConfig
        });

        return {
            ngModule: CoreModule,
            providers: providers
        }
    }

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded');
        }
    }

}