import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; 

import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailsComponent } from "./components/user-list/user-details/user-details.component";
import { UserAgePipe } from "./pipes/user-age.pipe";
import { IsAdultUserPipe } from "./pipes/is-adult-user.pipe";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AdminComponent } from './components/admin/admin.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { routes } from "./routing";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UserAgePipe,
    IsAdultUserPipe,
    AboutComponent,
    NotFoundComponent,
    AdminComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
