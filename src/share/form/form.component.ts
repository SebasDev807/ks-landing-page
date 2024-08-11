import { Component } from '@angular/core';
import { Consumer } from './interfaces/consumer.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  consumer: Consumer = {
    name: '',
    company: '',
    email: '',
  }

}
