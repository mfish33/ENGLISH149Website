import { Component, OnInit } from '@angular/core';
import { lessonImg, lessonVid } from '../lesson-data';
import { LessonStoreService } from '../lesson-store.service';

@Component({
  selector: 'app-lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit {

  constructor(private lessonStore:LessonStoreService,) { }

  public lessons:(lessonVid | lessonImg)[]

  ngOnInit(): void {
    this.lessons = this.lessonStore.getAllLessons()
  }

}
