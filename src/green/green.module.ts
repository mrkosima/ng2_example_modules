import {NgModule} from "@angular/core";
import {GreenComponent} from "./green.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [SharedModule],
    declarations: [
        GreenComponent
    ],
    exports: [
        GreenComponent
    ]
})
export class GreenModule {
}