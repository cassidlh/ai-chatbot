import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AboutComponent } from "./about/about.component";
import { ResourcesComponent } from './resources/resources.component';
import { CirclesComponent } from "./circles/circles.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CirclesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aiChatbot';
}
