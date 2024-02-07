import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { UploadContentComponent } from './upload-content/upload-content.component';
// import { ContentManagementComponent } from './content-management/content-management.component';
import { ContentItemComponent } from './content-item/content-item.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';

// import { CoursesComponent } from './courses/courses.component';
// import {NgxUiLoaderModule, NgxUiLoaderConfig,SPINNER,PB_DIRECTION} from "ngx-ui-loader";

// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   text:"Loading...",
//   textColor: "#ffffff",
//   textPosition: "center-center",
//   pbColor:"red",
//   bgsColor:"red",
//   fgsColor:"red",
//   fgsType: SPINNER.ballSpinClockwise,
//   fgsSize: 100,
//   pbDirection: PB_DIRECTION.leftToRight,
//   pbThickness: 5,
// }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LoginComponent,
    UploadContentComponent,
    // ContentManagementComponent,
    ContentItemComponent,
    AddTeacherComponent,
    EnrollStudentComponent,
  
    // CoursesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
