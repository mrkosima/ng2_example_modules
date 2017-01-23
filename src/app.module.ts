import {NgModule, OpaqueToken} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {UserModule} from "./user/user.module";
import {OrangeModule} from "./orange/orange.module";
import {GreenModule} from "./green/green.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot({userName: 'Batman'}),
        SharedModule,
        GreenModule,
        OrangeModule,
        UserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}