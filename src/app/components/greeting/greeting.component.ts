import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  @Input() message: string = 'Default message';
}
