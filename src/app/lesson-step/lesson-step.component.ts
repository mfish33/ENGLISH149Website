import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-step',
  templateUrl: './lesson-step.component.html',
  styleUrls: ['./lesson-step.component.scss']
})
export class LessonStepComponent implements OnInit {

  @Input() video:string
  @Input() img:string
  @Input() content:string

  constructor() { }

  ngOnInit(): void {
  }

}
