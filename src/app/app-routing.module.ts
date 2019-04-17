import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppshellComponent} from "./appshell/appshell.component";
import {ExamplePage} from "./dashboard/example/example.page";
import {CollapsePage} from './dashboard/collapse/collapse.page';
import {DropdownBasicPage} from './dashboard/dropdown/dropdown-basic.page';


const routes: Routes = [
  {path: '',
    pathMatch: 'full',
    redirectTo: 'shell'
  },
  {
    path: 'shell',
    component: AppshellComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: ExamplePage},
      {path: 'collapse', component: CollapsePage},
      {path: 'dropdown', component: DropdownBasicPage},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
