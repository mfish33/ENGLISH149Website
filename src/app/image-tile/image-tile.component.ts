import { Component, ElementRef, OnInit, ViewChild,Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {


 
  constructor() { }

  public backgroundRatio:number
  public windowRatio:number
  @ViewChild('tile') tile: ElementRef
  @ViewChild('self') self: ElementRef
  @Input() src: string

  async ngOnInit(): Promise<void> {
    while(!this.resize()) {
      await new Promise(resolve => setTimeout(resolve,50))
    }
  }

  resize(): boolean {
    this.backgroundRatio = this.tile?.nativeElement?.naturalWidth / this.tile?.nativeElement?.naturalHeight
    if(isNaN(this.backgroundRatio)) {
      return false
    }
    this.windowRatio = this.self?.nativeElement?.offsetWidth / this.self?.nativeElement?.offsetHeight
    return true
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowRatio = this.self?.nativeElement?.offsetWidth / this.self?.nativeElement?.offsetHeight
  }
}
