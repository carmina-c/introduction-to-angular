import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";

import { AppComponent } from "./app.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { routes } from "./routing";
import { BreedComponent } from "./components/breed/breed.component";
import { SubBreedComponent } from "./components/sub-breed/sub-breed.component";
import { RedirectHomeButtonComponent } from "./components/shared/redirect-home-button/redirect-home-button.component";

@NgModule({
	declarations: [
		AppComponent,
		DogsComponent,
		NotFoundComponent,
		BreedComponent,
		SubBreedComponent,
		RedirectHomeButtonComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
