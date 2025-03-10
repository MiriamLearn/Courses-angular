
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../../Directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
