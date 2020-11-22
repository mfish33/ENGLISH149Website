import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { LessonStepPageComponent } from './lesson-step-page/lesson-step-page.component';

const routes: Routes = [
  {path: 'steps/:id',component:LessonStepPageComponent},
  {path: '',component:LessonOverviewComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
