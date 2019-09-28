import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsaadComponent } from './asaad.component';

// The entryComponents array is used to define only components that are not found in template 
// and created dynamically with ComponentFactoryResolver. 
// Angular needs this hint to find them and compile = Factory + Host Factory
// All components should just be listed in the declarations array.


@NgModule({
  declarations: [
    AppComponent, AsaadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AsaadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
