import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';


import { AppComponent } from './app.component';
import { ListesComponent } from './listes/listes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
