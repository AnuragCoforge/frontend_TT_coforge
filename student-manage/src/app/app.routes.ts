import { Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

export const routes: Routes = [
    {
        path:'add',
        component:AddStudentComponent
    },
    {
        path:'list',
        component:ListStudentComponent
    }
];
