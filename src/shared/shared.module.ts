import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LimeComponent} from "./lime.component";
import {GrapefruitComponent} from "./grapefruit.component";


@NgModule({
    imports: [CommonModule],
    declarations: [
        LimeComponent,
        GrapefruitComponent
    ],
    exports: [
        CommonModule,
        LimeComponent,
        GrapefruitComponent
    ]
})
export class SharedModule {
}