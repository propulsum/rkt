import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { PixelCoord } from 'core/domain/PixelCoord';
import { DrawingCoord } from 'core/domain/DrawingCoord';

@Component({
  selector: 'rkt-rocket-drawing',
  templateUrl: './rocket-drawing.component.html',
  styleUrls: ['./rocket-drawing.component.sass']
})
export class RocketDrawingComponent {
  @Input() sideBarToggled: boolean;
  public drawing_width: number;
  public drawing_height: number;
  public unitiyPx = 30;

  @ViewChild('drawingSvg') drawingSvg: ElementRef;
  screenHeight: number;
  screenWidth: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.getSizes();
    this.drawing_origin.x = this.drawing_width / 2;
    this.drawing_origin.y = 0;
    this.cd.detectChanges();
  }

  public pan_start: PixelCoord;
  public pan_start_origin: PixelCoord;
  public isPanning: boolean;

  detectedMouseDown(event: MouseEvent): void {
    this.pan_start = new PixelCoord(event.x, event.y);
    this.pan_start.x -= this.screenWidth - this.drawing_width;
    this.pan_start_origin = new PixelCoord(
      this.drawing_origin.x + 0,
      this.drawing_origin.y
    );
    this.isPanning = true;
  }

  detectedMouseUp(): void {
    this.isPanning = false;
  }

  detectedMouseLeave(): void {
    this.isPanning = false;
  }

  public drawing_origin: PixelCoord = new PixelCoord(0, 0);
  public mouse_location: PixelCoord = new PixelCoord(0, 0);
  public lockPanY = true;
  public displayCoords = '(0,0)';

  mouseMove(mouse: MouseEvent): void {
    this.getSizes();
    this.mouse_location = new PixelCoord(mouse.x, mouse.y);
    this.mouse_location.x -= this.screenWidth - this.drawing_width;
    this.displayCoords = this.pixelToCoord(this.mouse_location).print();

    if (this.isPanning) {
      this.pan();
    }
  }

  detectedMouseWheel(event: MouseEvent): void {
    console.log(event);
  }

  pan(): void {
    const dy: number = this.mouse_location.y - this.pan_start.y;
    const dx: number = this.mouse_location.x - this.pan_start.x;

    console.log('before: ' + this.drawing_origin.print());
    console.log('before: ' + this.pan_start.print());
    console.log(dx);
    console.log(dy);
    if (!this.lockPanY) {
      this.drawing_origin.x = this.pan_start_origin.x + dx;
    }
    this.drawing_origin.y = this.pan_start_origin.y + dy;
    console.log('after: ' + this.drawing_origin.print());
  }

  @HostListener('window:resize')
  getSizes(): void {
    this.getDrawingDimensions();
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.lockPanY) {
      this.drawing_origin.x = this.drawing_width / 2;
    }
  }

  getDrawingDimensions(): void {
    this.drawing_width = this.drawingSvg.nativeElement['width'].baseVal.value;
    this.drawing_height = this.drawingSvg.nativeElement['height'].baseVal.value;
  }

  pixelToCoord(pixel: PixelCoord): DrawingCoord {
    const x = (pixel.x - this.drawing_origin.x) / this.unitiyPx;
    const y = (pixel.y - this.drawing_origin.y) / this.unitiyPx;

    return new DrawingCoord(x, y);
  }
}
