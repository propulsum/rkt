import { Component } from '@angular/core';
import { NoseconeViewModel } from 'core/view-models/NoseconeViewModel';

@Component({
  selector: 'rkt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public noseConeVM: NoseconeViewModel;

  constructor() {
    this.noseConeVM = new NoseconeViewModel();
  }
}
