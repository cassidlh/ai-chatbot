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



@Component({
  selector: 'app-chatbot',
  standalone: true, // Mark it as a standalone component
  imports: [RouterOutlet, LikertComponent, CirclesComponent], // Import RouterOutlet if needed
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'] // Fix typo (styleUrl → styleUrls)
})
export class ChatbotComponent {
  ngOnInit():any {
    
  }
}

