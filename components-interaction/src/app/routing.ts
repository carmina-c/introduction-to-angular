import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { UserListComponent } from "./components/user-list/user-list.component";

export const routes: Routes = [
    { 
      path: "", 
      component: AdminComponent
    },
    {
      path: "users/:id",
      component: UserInfoComponent
    },
    {
      path: "users", 
      component: UserListComponent
    },
    {
      path: "about", 
      component: AboutComponent
    },
    {
      path: "**", 
      component: NotFoundComponent
    }
  ]