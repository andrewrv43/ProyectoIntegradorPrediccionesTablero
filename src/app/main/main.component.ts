import { Component } from '@angular/core';
import {MatSlideToggleModule } from '@angular/material/slide-toggle'
import {DragDropModule} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatSlideToggleModule,DragDropModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
