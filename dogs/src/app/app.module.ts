import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { routes } from "./routing";
import { BreedComponent } from "./components/breed/breed.component";
import { SubBreedComponent } from "./components/sub-breed/sub-breed.component";

@NgModule({
	declarations: [
		AppComponent,
		DogsComponent,
		NotFoundComponent,
		BreedComponent,
		SubBreedComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
