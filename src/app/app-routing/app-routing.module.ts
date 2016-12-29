import {NgModule}              from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes}  from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {FindTicketComponent} from '../find-ticket/find-ticket.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'findTicket', component: FindTicketComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), NgbModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
