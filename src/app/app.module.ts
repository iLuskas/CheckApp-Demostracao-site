import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './template/navbar/navbar.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './template/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/Email.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './template/footer/footer.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
