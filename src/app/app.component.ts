import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TempConverterComponent} from "./temp-converter/temp-converter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasic';
}
