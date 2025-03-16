import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal(`My First Angular App`);
}
