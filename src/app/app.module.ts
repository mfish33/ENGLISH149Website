import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LessonStepComponent } from './lesson-step/lesson-step.component';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card'
import { BackgroundImageComponent } from './background-image/background-image.component';
import { LessonStepPageComponent } from './lesson-step-page/lesson-step-page.component';
import { ImageTileComponent } from './image-tile/image-tile.component'

@NgModule({
  declarations: [
    AppComponent,
    LessonStepComponent,
    LessonOverviewComponent,
    NavbarComponent,
    BackgroundImageComponent,
    LessonStepPageComponent,
    ImageTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
