import { Injectable } from '@angular/core';
import { lessons, lessonImg, lessonVid } from './lesson-data'

@Injectable({
  providedIn: 'root'
})
export class LessonStoreService {

  constructor() { }

  getLesson(id:string): lessonImg | lessonVid | undefined {
    return lessons.filter(l => l.id == id)[0]
  }

  getAllLessons() {
    return [...lessons]
  }

  
  getForwardBack(id:string):ForwardBack {
    let i = lessons.findIndex(l => l.id == id)
    
    return {
      back:lessons[i-1]?.id,
      forward:lessons[i+1]?.id
    }
  }

}
export interface ForwardBack {
  back:string | undefined;
  forward: string | undefined;
}