import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikertComponent } from '../likert/likert.component';
import { CirclesComponent } from '../circles/circles.component';
import { RouterModule } from '@angular/router'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  isVideoVisible=false;

  showVideo() {
    this.isVideoVisible=true;
    console.log("button clicked");
    console.log(this.isVideoVisible);
  }

  closeVideo() {
    this.isVideoVisible=false;
  }
}
