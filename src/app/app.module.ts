import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule , AngularFireList} from 'angularfire2/database';

import { PersonneService } from './services/personne.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { IndexComponent } from './index/index.component';
import { NavbarRightComponent } from './navbar-right/navbar-right.component';
import { NavbarrightComponent } from './navbarright/navbarright.component';
import { HomeDirecComponent } from './home-direc/home-direc.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { CustomerComponent } from './customer/customer.component';
import { ProjectComponent } from './project/project.component';
import { AdministrationComponent } from './administration/administration.component';
import { ClaimsComponent } from './claims/claims.component';
import { TaskComponent } from './task/task.component';
import { TableDynComponent } from './table-dyn/table-dyn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsTaskComponent } from './details-task/details-task.component';
import { DetaitsprojectsComponent } from './detaitsprojects/detaitsprojects.component';
import { DialEditBrandComponent } from './dial-edit-brand/dial-edit-brand.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { AddComponent } from './consultants/add/add.component';
import { UpdateComponent } from './consultants/update/update.component';
import { CompteComponent } from './compte/compte.component';


const routes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'navbar',component:NavbarComponent},
  {path: 'HomeUser',component:HomeUserComponent},
  {path: 'Index',component:IndexComponent},
  {path: 'Navbarright',component:NavbarrightComponent},
  {path: 'HomeDirec',component:HomeDirecComponent},

  {path: 'Consultants',component:ConsultantsComponent},
  {path: 'AddConsultants',component:AddComponent},
  {path: 'UpdateConsultant/:id',component:UpdateComponent},


  {path: 'Compte',component:CompteComponent},



  {path: 'Customer',component:CustomerComponent},
  {path: 'Project',component:ProjectComponent},
  {path: 'Administration',component:AdministrationComponent},
  {path: 'Claims',component:ClaimsComponent},
  {path: 'Task',component:TaskComponent},
  {path: 'TableDyn',component:TableDynComponent},
  {path: 'Dashboard',component:DashboardComponent},
  {path: 'DetailsTask/{id}',component:DetailsTaskComponent},
  {path: 'Detaitsprojects/{id}',component:DetaitsprojectsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeUserComponent,
    IndexComponent,
    NavbarRightComponent,
    NavbarrightComponent,
    HomeDirecComponent,
    ConsultantsComponent,
    CustomerComponent,
    ProjectComponent,
    AdministrationComponent,
    ClaimsComponent,
    TaskComponent,
    TableDynComponent,
    DashboardComponent,
    DetailsTaskComponent,
    DetaitsprojectsComponent,
    DialEditBrandComponent,
    UsersComponent,
    SignInComponent,
    SignUpComponent,
    AddComponent,
    UpdateComponent,
    CompteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule, // imports firebase/storage only needed for storage features



    ConfirmationPopoverModule.forRoot({confirmButtonType : 'danger'}),
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      timeOut : 5000,
      positionClass : 'toast-top-right',
      preventDuplicates : false
    }),
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
