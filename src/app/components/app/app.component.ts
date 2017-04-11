import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<instagramfeed></instagramfeed>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
   name = 'Angular'; 
   lastName: string = 'Thumbadoo';
}