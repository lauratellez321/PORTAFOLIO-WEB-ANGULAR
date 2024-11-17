import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./core/home/home.component";
import { PdfComponent } from "./core/pdf/pdf.component";
import { HeaderComponent } from "./core/header/header.component";
import { SafeUrlPipe } from "./core/pdf/safe-url.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PdfComponent,
    HeaderComponent,
    SafeUrlPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
