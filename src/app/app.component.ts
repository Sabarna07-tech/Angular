import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <app-header />
    <main>
    <router-outlet></router-outlet>

    </main>
    
  `,
  styles: [`
    main {
      margin-top: 20px;
      padding: 20px;
      background-color: #f4f4f4;
      border-radius: 5px;
    }
      
  `]
})
export class AppComponent {
  title = 'first-ng-app';
}
