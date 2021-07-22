import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "./routes";

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    relativeLinkResolution: 'legacy'
})
    ], exports: [RouterModule]
})
export class AppRoutingModule {
}
