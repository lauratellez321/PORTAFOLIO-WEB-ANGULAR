import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PdfComponent } from "./core/pdf/pdf.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
  {
    path: "pdf",
    component: PdfComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
