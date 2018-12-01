                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { UsersComponent } from "./users/users.component";
import { PageNoteFoundComponent } from "./page-note-found/page-note-found.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGaurd } from "./authgaurd.service";


const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers', canActivateChild: [AuthGaurd], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  { path: "notFound", component: PageNoteFoundComponent },
  { path: "redirectToTest", redirectTo: '/notFound' },
  { path: "**", redirectTo: '/notFound' }
]; 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule{

}
