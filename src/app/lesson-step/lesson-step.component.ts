import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-lesson-step',
  templateUrl: './lesson-step.component.html',
  styleUrls: ['./lesson-step.component.scss']
})
export class LessonStepComponent implements OnInit {

  @Input() video: string
  @Input() img: string
  @Input() content: string
  @Input() caution: string[] | undefined

  public contentSanitized

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.contentSanitized = this.sanitizer.sanitize(SecurityContext.HTML, this.content)
  }

}
