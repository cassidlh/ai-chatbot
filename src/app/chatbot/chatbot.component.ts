// import { Component } from '@angular/core';
// import { NavBarComponent } from "../nav-bar/nav-bar.component";
// import { RouterOutlet } from '@angular/router';



// @Component({
//   selector: 'app-chatbot',
//   imports: [NavBarComponent],
//   templateUrl: './chatbot.component.html',
//   styleUrl: './chatbot.component.css'
// })
// export class ChatbotComponent {

// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikertComponent } from '../likert/likert.component';
import { CirclesComponent } from '../circles/circles.component';
import { RouterModule } from '@angular/router'
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-chatbot',
  standalone: true, // Mark it as a standalone component
  imports: [RouterModule, RouterOutlet, CommonModule, LikertComponent, CirclesComponent], // Import RouterOutlet if needed
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'] // Fix typo (styleUrl → styleUrls)
})
export class ChatbotComponent {
  constructor(private router: Router) { }

  goToAnotherPage() {
    this.router.navigate(['/track']);
  }

  isIntroVisible = true;
  isVideoVisible = false;
  isClosingQuestionsVisible = false;
  isThankYouVisible = false;

  showVideo() {
    this.isVideoVisible = true;
    this.isIntroVisible = false;
  }

  hideVideo() {
    this.isIntroVisible = false;
    this.isVideoVisible=false;
    this.isClosingQuestionsVisible=true;

  }

  thankYouPage() {
    this.isIntroVisible = false;
    this.isClosingQuestionsVisible=false;
    this.isVideoVisible=false;
    this.isThankYouVisible=true;
    console.log("Navigating to Thank You Page...")
    
  }

  resetChat() {
    this.isClosingQuestionsVisible=false;
    this.isVideoVisible=false;
    this.isThankYouVisible=false;
    this.isIntroVisible = true;
  }

}



