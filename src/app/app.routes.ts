
import { Routes } from '@angular/router';
import { SignComponent } from '../components/sign/sign.component';
import { HomeComponent } from '../components/home/home.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';
import { ManageCoursesComponent } from '../components/manage-courses/manage-courses.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { CourseDetailComponent } from '../components/course-details/course-details.component';

export const routes: Routes = [
    { path: '', component: SignComponent },
    { 
        path: 'home', 
        component: HomeComponent, 
        children: [
            { 
                path: 'myCourses', 
                component: CoursesListComponent,
                children: [
                    { path: ':id', component: ManageCoursesComponent }
                ]
            },
            { 
                path: 'courses', 
                component: CoursesComponent, 
                children: [
                    { path: ':id', component: ManageCoursesComponent }
                ]
            },
           
        ]

    },
    { path: 'add', component: CourseDetailComponent },
    { path: 'update/:id', component: CourseDetailComponent },
];

