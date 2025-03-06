import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // Redirect to Home
];
