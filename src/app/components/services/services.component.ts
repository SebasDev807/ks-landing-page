import { Component, Input } from '@angular/core';
import { imageUrls } from '../../image-loader';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})


export class ServicesComponent {

  @Input() title: string = " ";
  @Input() description: string | null = null;
  @Input() imageUrls: string[] = [
    '/assets/icons/angular-logo.png',
    '/assets/icons/logo-flutter.png',
    '/assets/icons/logo-vue.png',
    '/assets/icons/logo-spring.png',
    '/assets/icons/logo-react.png',
    '/assets/icons/logo-node.png',];
}
