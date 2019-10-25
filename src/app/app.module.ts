
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatFormFieldModule , MatDialogModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesPageComponent,
    NewsPageComponent,
    ContactPageComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    MatDialogModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
