import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-likert',
  imports: [],
  templateUrl: './likert.component.html',
  styleUrl: './likert.component.css'
})
export class LikertComponent {
  @Input() question: string = '';
  @Input() groupName: string = '';
}
