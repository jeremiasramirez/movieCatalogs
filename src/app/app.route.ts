import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core"


// components

import { HomeComponent } from "./home/home.component"
import { InitComponent } from "./init/init.component"
import {  SearchComponent } from "./search/search.component"


const ROUTES : Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "search/:type",
    component: HomeComponent
  },
  {
    path: '',
    component: InitComponent
  }
]


export var routingMovie : ModuleWithProviders = RouterModule.forRoot(ROUTES);
