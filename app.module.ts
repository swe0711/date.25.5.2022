import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateValidateComponent } from './date-validate/date-validate.component';


@NgModule({
  declarations: [
    AppComponent,
    DateValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
