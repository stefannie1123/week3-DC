import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantsService } from './participants/participants.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
