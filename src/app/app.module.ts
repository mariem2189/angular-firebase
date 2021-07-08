import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { VideosComponent } from './components/videos/videos.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FilterPipe } from './pipes/filter.pipe';

const firebaseConfig = {
  apiKey: "AIzaSyD7CGIPZ3663PSgVR-8pbMgmmsRwML47zg",
  authDomain: "test-7a6d4.firebaseapp.com",
  projectId: "test-7a6d4",
  storageBucket: "test-7a6d4.appspot.com",
  messagingSenderId: "763447055690",
  appId: "1:763447055690:web:97b7c85e66b3782ddd5db3",
  measurementId: "G-QR1JBWKPK3"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    VideosComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
