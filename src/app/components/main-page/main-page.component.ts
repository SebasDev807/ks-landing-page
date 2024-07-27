import { Component, Input } from '@angular/core';
import { imageUrls } from '../../image-loader';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title = 'Nuestros servicios'
  aplicacionImagesList: string[] = [
    '/assets/icons/angular-logo.png',
    '/assets/icons/logo-flutter.png',
    '/assets/icons/logo-vue.png',
    '/assets/icons/logo-spring.png',
    '/assets/icons/logo-react.png',
    '/assets/icons/logo-node.png',
  ];
}
