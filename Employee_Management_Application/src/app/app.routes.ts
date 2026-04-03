import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginpageComponent
    },
    {
        path:"login",
        component:LoginpageComponent
    },
    {
        path:"edit",
        component:UpdateComponent
    },
    {
        path:"update",
        component:UpdateComponent
    },
    {
        path:"add",
        component:AddComponent
    },
    {
        path:"list",
        component:ListComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];
