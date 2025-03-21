import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = 'Welcome to our site!';
  
  keyUpHandler(event: KeyboardEvent) {
    console.log('Key pressed:', (event.target as HTMLInputElement).value);
  }
}
