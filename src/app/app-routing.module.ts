import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { InforComponent } from './components/infor/infor.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path:'', component:NavComponent, children:[
      {path: 'buscar', component: BuscarComponent,children:[
        {path: 'infor', component: InforComponent}
      ]},
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
