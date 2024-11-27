import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      alert(`Message sent by ${this.name}`);
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
}
