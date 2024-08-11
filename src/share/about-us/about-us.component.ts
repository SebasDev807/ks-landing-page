import { Component } from '@angular/core';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  url: string = '/public/assets/images/react-image.svg';
}
