import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclesComponent } from "../circles/circles.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CirclesComponent, CirclesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit():any {
    
  }

  isGoogleSignInVisible = false;
  googleSignIn(value: boolean){
    this.isGoogleSignInVisible = value;
    console.log("Google Sign In Clicked");
  }
}
