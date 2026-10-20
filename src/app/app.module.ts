import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './components/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
