import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { MyComponentComponent } from './my-component/my-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ComponentWithIDComponent } from './component-with-id/component-with-id.component';
import { ServiceComponent } from './service/service.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SignalsComponent } from './signals/signals.component';
import { ProductsComponent } from './products/products.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetails2Component } from './course-details2/course-details2.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { APIComponent } from './api/api.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about-us', component: AboutComponent, title: 'About Us' },
    { path: 'contact-us', component: ContactComponent, title: 'Contact Us' },
    { path: 'contact-us/:id', component: ComponentWithIDComponent, title: 'Contact Us with ID' },

    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products',
        children: [
            { path: 'tshirts', component: TshirtsComponent },
            { path: 'trousers', component: TrousersComponent }
        ]
    },

    { path: 'courses', component: CoursesComponent, title: 'Courses' },
    {
        path: 'course-details',
        component: CourseDetailsComponent,
        outlet: 'courseDetails'
    },
    {
        path: 'course-details2',
        component: CourseDetails2Component,
        outlet: 'courseDetails2'
    },

    { path: 'ng-content', component: NgContentComponent, title: 'Ng Content' },
    { path: 'ng-template', component: NgTemplateComponent, title: 'Ng Template' },

    // { path: 'my-component', component: MyComponentComponent, title: 'My Component' },

    /* Using Lazy Loading  */
    {
        path: 'my-component',
        loadComponent: () => import('./my-component/my-component.component').then((c) => c.MyComponentComponent),
        title: 'My Component'
    },

    /* OR */

    // {
    //     path: 'my-component',
    //     async loadComponent() {
    //         const c = await import('./my-component/my-component.component');
    //         return c.MyComponentComponent;
    //     },
    //     title: 'My Component'
    // },

    { path: 'service', component: ServiceComponent, title: 'Service' },
    { path: 'api', component: APIComponent, title: 'API' },
    { path: 'signals', component: SignalsComponent, title: 'Signals' },

    { path: 'employees', component: EmployeesListComponent, title: 'Employees' },
    { path: 'employees/:id', component: EmployeeDetailsComponent, title: 'Employee Details' },
    { path: 'employees/:id/:name', component: EmployeeDetailsComponent, title: 'Employee Details' },

    { path: 'profile', component: ProfileComponent, title: 'Profile' },
    { path: 'profile2', component: ProfileComponent, data: { name: 'Dinesh R' }, title: 'Profile2' },

    { path: '**', component: NotFoundComponent, title: '404 - Not Found' }
];
