import { NgModule } from "@angular/core";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { MainModule } from "./main/main.module";


@NgModule({
    imports: [HeaderModule, FooterModule, MainModule],
    exports: [HeaderModule,FooterModule,MainModule]
})
export class LayoutModule { }