import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { CurrentComponent } from './current/current.component';
import { FivedaysComponent } from './fivedays/fivedays.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CurrentComponent,
    FivedaysComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBwJW2gezqnzDTWDuRGZ9tX5hFDwXsTRSw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
