import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { StudentComponent } from './studentdata/student/student.component';
import { StudentlistComponent } from './studentdata/studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentdataComponent,
    StudentComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
