import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstagramFeedComponent } from './components/instagram/InstagramFeed.component';
import { InstagramCardComponent } from './components/instagram/InstagramCard.component';
import { InstagramUserComponent } from './components/instagram/InstagramUser.component';


import { AppComponent }  from './components/app/app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule ],
  declarations: [ AppComponent, InstagramCardComponent, InstagramFeedComponent, InstagramUserComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
