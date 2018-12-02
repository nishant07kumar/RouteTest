import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { AppRoutingModule } from './approuting.module';
import { AuthenticationService } from './auth.service';
import { AuthGaurd } from './authgaurd.service';
import { CanDeActivateGaurd } from './servers/edit-server/canDeactivateGaurd.service';
import { ErrorComponentComponent } from './error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNoteFoundComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthenticationService, AuthGaurd, CanDeActivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
