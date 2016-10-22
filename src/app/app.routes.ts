import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { indexComponent } from "./index/index.component";
// import { About } from './about';
// import { NoContent } from './no-content';
import { findComponent } from "./find/find.component";


import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: indexComponent },
  { path: 'home',  component: indexComponent },
  { path: "find",  component: findComponent },
//   { path: "live",  component: LiveComponent },
  // { path: 'about', component: About },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail')
  // },
  // { path: '**',    component: NoContent },
];
