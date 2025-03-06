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
  { path: ' ', component: HomeComponent }
  //   { path: '', redirectTo: '/home', pathMatch: 'full' } 
];


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ChatbotComponent } from './chatbot/chatbot.component';
// import { ResourcesComponent } from './resources/resources.component';
// import { AboutComponent } from './about/about.component';

// const routes: Routes = [
//   { path: ' ', component: HomeComponent },
//   { path: 'chatbot', component: ChatbotComponent },
//   { path: 'resources', component: ResourcesComponent },
//   { path: 'about', component: AboutComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home by default
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
