import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { CircleProgressBarComponent } from './circle-progress-bar/circle-progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    CircleProgressBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatMenuModule,
    NgCircleProgressModule.forRoot({
      radius: 75,
      outerStrokeWidth: 15,
      innerStrokeWidth: 15,
      outerStrokeColor: "#4882c2",
      innerStrokeColor: "#e7e8ea",
      animationDuration: 300,
     })
  ],
  exports: [
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
