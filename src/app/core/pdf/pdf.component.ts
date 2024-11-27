import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pdf",
  templateUrl: "./pdf.component.html",
  styleUrls: ["./pdf.component.scss"],
})
export class PdfComponent implements OnInit {
  pdfUrl =
    "https://valendev-assets.s3.us-east-1.amazonaws.com/CVLauraValentinaTellez.pdf";

  constructor() {}

  ngOnInit(): void {}
}
