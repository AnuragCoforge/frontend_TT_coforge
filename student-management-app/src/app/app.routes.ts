import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'add',
        component : MainComponent
    },
    {
        path:'update',
        component : UpdateComponent
    },
    {
        path:'edit',
        component: UpdateComponent
    },
    {
        path:'list',
        component: ListComponent
    },
    {
        path:'info/:id',
        component: InfoComponent
    }
];
