import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  c = "";
  f = "";
  constructor() {}

  ngOnInit() {}

  onChange(value: string | null, type: "c" | "f") {
    if (value === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temperature = Number(value);
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
  // value1: any;
  // value2: any;
  // cel: any;
  // fah: any;
  //
  // getChange(event: any){
  //   this.value1 = event.target.value;
  //   this.cel = this.value1;
  //   this.fah = this.value1*5;
  // }

  // getFah(event: any){
  //   this.value2 = (event.target as HTMLInputElement).value;
  //   this.value2 = this.value2*2;
  //   this.fah = this.value2;
  // }
}
