import { Component, ElementRef, OnInit, ViewChild, Input, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public backgroundRatio: number
  public windowRatio: number
  @ViewChild('tile') tile: ElementRef
  @ViewChild('self') self: ElementRef
  @Input() src: string
  public imgSrc: SafeUrl

  async ngOnInit(): Promise<void> {
    const imgRes = await fetch(this.src)
    const imgBlob = await imgRes.blob()
    const imgUrl = URL.createObjectURL(imgBlob)
    this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(imgUrl)
    const imgDims = await this.getPngDimensions(imgBlob)
    this.backgroundRatio = imgDims.width / imgDims.height
    this.windowRatio = this.self?.nativeElement?.offsetWidth / this.self?.nativeElement?.offsetHeight
    // IF PNG is Malformed
    if (this.backgroundRatio < 0 || this.backgroundRatio > 5) {
      while (!this.resize()) {
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }
  }

  resize(): boolean {
    this.backgroundRatio = this.tile?.nativeElement?.naturalWidth / this.tile?.nativeElement?.naturalHeight
    if (isNaN(this.backgroundRatio)) {
      return false
    }
    return true
  }

  async getPngDimensions(pngBlob: Blob): Promise<{ width: number, height: number }> {
    let dv = new DataView(await pngBlob.slice(16, 24).arrayBuffer())
    return {
      width: dv.getInt32(0),
      height: dv.getInt32(4)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowRatio = this.self?.nativeElement?.offsetWidth / this.self?.nativeElement?.offsetHeight
  }
}
