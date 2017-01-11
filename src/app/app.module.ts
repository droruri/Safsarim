import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindTicketComponent } from './find-ticket/find-ticket.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AboutComponent } from './about/about.component';

import {LeagueServiceService} from "./league-service.service";


@NgModule({
  declarations: [
    AppComponent,
    FindTicketComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [LeagueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
