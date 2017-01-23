import {NgModule} from "@angular/core";
import {OrangeComponent} from "./orange.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        OrangeComponent
    ],
    exports: [
        OrangeComponent
    ]
})
export class OrangeModule {
}