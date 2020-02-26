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
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { StatAdminComponent } from './stat-admin/stat-admin.component';
import { PresenceComponent } from './presence/presence.component';
import { NoteDeFarisComponent } from './note-de-faris/note-de-faris.component';
import { CongesComponent } from './conges/conges.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { MaladieComponent } from './maladie/maladie.component';
import { HomeCustoComponent } from './home-custo/home-custo.component';
import { DashCustComponent } from './dash-cust/dash-cust.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ProjectCustoComponent } from './project-custo/project-custo.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { HomeConsComponent } from './home-cons/home-cons.component';
import { DashConsComponent } from './dash-cons/dash-cons.component';
import { MesTachesComponent } from './mes-taches/mes-taches.component';
import { DemandCongComponent } from './demand-cong/demand-cong.component';
import { DemandAutoComponent } from './demand-auto/demand-auto.component';
import { PartieProjComponent } from './partie-proj/partie-proj.component';
import { AccountComponent } from './account/account.component';
import { HistoryComponent } from './history/history.component';
import { MonreposComponent } from './monrepos/monrepos.component';
import { NotefraisComponent } from './notefrais/notefrais.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddPComponent } from './project/add-p/add-p.component';
import { AddbesoinComponent } from './detaitsprojects/addbesoin/addbesoin.component';
import { DetailreleaseComponent } from './detaitsprojects/detailrelease/detailrelease.component';
import { DetailSprintComponent } from './detaitsprojects/detailrelease/detail-sprint/detail-sprint.component';
import { DetalTacheComponent } from './detaitsprojects/detailrelease/detailSprint/detal-tache/detal-tache.component';


const routes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'navbar',component:NavbarComponent},
  {path: 'HomeUser',component:HomeUserComponent},
  {path: 'Index',component:IndexComponent},
  {path: 'Navbarright',component:NavbarrightComponent},
  {path: 'Claims',component:ClaimsComponent},
  {path: 'Account',component:AccountComponent},
  {path: 'History',component:HistoryComponent},
  {path: 'Monrepos',component:MonreposComponent},
  {path: 'Notefrais',component:NotefraisComponent},
  {path: 'Forbidden',component:ForbiddenComponent},

  

        //*****    Path Direction   ******* ///

  {path: 'HomeDirec',component:HomeDirecComponent},
  {path: 'Consultants',component:ConsultantsComponent},
  {path: 'AddConsultants',component:AddComponent},
  {path: 'UpdateConsultant/:id',component:UpdateComponent},
  {path: 'Compte',component:CompteComponent},
  {path: 'Customer',component:CustomerComponent},
  {path: 'Project',component:ProjectComponent},
  {path: 'AddP',component:AddPComponent},
  {path: 'Administration',component:AdministrationComponent},
  {path: 'Task',component:TaskComponent},
  {path: 'TableDyn',component:TableDynComponent},
  {path: 'Dashboard',component:DashboardComponent},
  {path: 'DetailsTask/{id}',component:DetailsTaskComponent},
  {path: 'Detaitsprojects/:id',component:DetaitsprojectsComponent},
  {path: 'Addbesoin',component:AddbesoinComponent},
  {path: 'Detailrelease/:id',component:DetailreleaseComponent},
  {path: 'DetailSprint/:id',component:DetailSprintComponent},

  
  
        //*****    Path Administration   ******* ///
  {path: 'HomeAdmin',component:HomeAdminComponent},
  {path: 'StatAdmin',component:StatAdminComponent},
  {path: 'Presence',component:PresenceComponent},
  {path: 'NoteDeFaris',component:NoteDeFarisComponent},
  {path: 'Conges',component:CongesComponent},
  {path: 'Autorisation',component:AutorisationComponent},
  {path: 'Maladie',component:MaladieComponent},




          //*****    Path Customer   ******* ///
          {path: 'HomeCusto',component:HomeCustoComponent},
          {path: 'DashCons',component:DashCustComponent},
          {path: 'CreateTask',component:CreateTaskComponent},
          {path: 'ProjectCusto',component:ProjectCustoComponent},
          {path: 'UserStory',component:UserStoryComponent},



          //*****    Path Consultants   ******* ///
          {path: 'HomeCons',component:HomeConsComponent},
          {path: 'DashCons',component:DashConsComponent},
          {path: 'MesTaches',component:MesTachesComponent},
          {path: 'DemandCong',component:DemandCongComponent},
          {path: 'DemandAuto',component:DemandAutoComponent},
          {path: 'PartieProj',component:PartieProjComponent},

          
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
    HomeAdminComponent,
    StatAdminComponent,
    PresenceComponent,
    NoteDeFarisComponent,
    CongesComponent,
    AutorisationComponent,
    MaladieComponent,
    HomeCustoComponent,
    DashCustComponent,
    CreateTaskComponent,
    ProjectCustoComponent,
    UserStoryComponent,
    HomeConsComponent,
    DashConsComponent,
    MesTachesComponent,
    DemandCongComponent,
    DemandAutoComponent,
    PartieProjComponent,
    AccountComponent,
    HistoryComponent,
    MonreposComponent,
    NotefraisComponent,
    ForbiddenComponent,
    AddPComponent,
    AddbesoinComponent,
    DetailreleaseComponent,
    DetailSprintComponent,
    DetalTacheComponent,
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
