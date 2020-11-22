import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonStoreService,ForwardBack } from 'src/app/lesson-store.service'
import { lessonVid, lessonImg } from '../lesson-data';

@Component({
  selector: 'app-lesson-step-page',
  templateUrl: './lesson-step-page.component.html',
  styleUrls: ['./lesson-step-page.component.scss']
})
export class LessonStepPageComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private lessonStore:LessonStoreService, private router:Router) { }

  public lesson$:Promise<lessonVid | lessonImg> = new Promise(()=>{})
  public buttonRoutes:ForwardBack

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      let lesson = this.lessonStore.getLesson(params.id)
      if(!lesson) {
        this.router.navigateByUrl('')
      }
      this.buttonRoutes = this.lessonStore.getForwardBack(lesson.id)
      this.lesson$ = Promise.resolve(lesson)
    })
  }

}