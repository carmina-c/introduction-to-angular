import { Routes } from "@angular/router";

import { BreedComponent } from "./components/breed/breed.component";
import { DogsComponent } from "./components/dogs/dogs.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SubBreedComponent } from "./components/sub-breed/sub-breed.component";

export const routes: Routes = [
	{
		path: "",
		component: DogsComponent
	},
	{
		path: "breed/:name/:sub-breed",
		component: SubBreedComponent
	},
	{
		path: "breed/:name",
		component: BreedComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
]