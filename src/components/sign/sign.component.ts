import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [MatCardModule,MatDialogModule,MatButtonModule,MatDividerModule, MatIconModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  private dialog = inject(MatDialog); 
  SignUp() {
    this.dialog.open(RegisterComponent);
  }
  SignIn() {
    this.dialog.open(LoginComponent);
  }
}
