import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from '../share/footer/footer.component';
import { HeaderComponent } from '../share/header/header.component';
import { ColorTestComponent } from '../share/color-test/color-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ks-landing-page';
}
