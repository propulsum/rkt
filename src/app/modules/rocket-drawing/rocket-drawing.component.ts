import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  ChangeDetectorRef
} from '@angular/core';
import { PixelCoord } from 'core/domain/PixelCoord';
import { DrawingCoord } from 'core/domain/DrawingCoord';
import { RocketDrawingViewModel } from './rocket-drawing.viewmodel';

@Component({
  selector: 'rkt-rocket-drawing',
  templateUrl: './rocket-drawing.component.html',
  styleUrls: ['./rocket-drawing.component.sass']
})
export class RocketDrawingComponent {
  public viewModel: RocketDrawingViewModel = new RocketDrawingViewModel();

  @ViewChild('drawingSvg') drawingSvg: ElementRef;

  constructor(private cd: ChangeDetectorRef) {
    this.viewModel.drawing_origin = new PixelCoord(0, 0);
    this.viewModel.mouse_location = new PixelCoord(0, 0);
    this.viewModel.drawing_scale = 2;
  }

  ngAfterViewInit(): void {
    this.getSizes();
    this.viewModel.drawing_origin = new PixelCoord(
      this.viewModel.drawing_width / 2,
      0
    );
    this.cd.detectChanges();
  }

  detectedMouseDown(event: MouseEvent): void {
    this.viewModel.pan_start = new PixelCoord(event.x, event.y);
    this.viewModel.pan_start.x -=
      this.viewModel.screenWidth - this.viewModel.drawing_width;
    this.viewModel.pan_start_origin = new PixelCoord(
      this.viewModel.drawing_origin.x + 0,
      this.viewModel.drawing_origin.y
    );
    this.viewModel.isPanning = true;
  }

  stopPanning(): void {
    this.viewModel.isPanning = false;
  }

  mouseMove(mouse: MouseEvent): void {
    this.getSizes();
    this.viewModel.mouse_location = new PixelCoord(mouse.x, mouse.y);
    this.viewModel.mouse_location.x -=
      this.viewModel.screenWidth - this.viewModel.drawing_width;
    this.viewModel.displayCoords = this.pixelToCoord(
      this.viewModel.mouse_location
    ).print();

    if (this.viewModel.isPanning) {
      this.pan();
    }
  }

  detectedMouseWheel(event: WheelEvent): void {
    if (
      this.viewModel.drawing_scale + event.deltaY <
      this.viewModel.drawing_scale_min
    ) {
      this.viewModel.drawing_scale = this.viewModel.drawing_scale_min + 1;
      return;
    }
    if (
      this.viewModel.drawing_scale + event.deltaY >
      this.viewModel.drawing_scale_max
    ) {
      this.viewModel.drawing_scale = this.viewModel.drawing_scale_max - 1;
      return;
    }
    this.viewModel.drawing_scale +=
      event.deltaY / this.viewModel.scrollWheelSpeed;
  }

  pan(): void {
    const dy: number =
      this.viewModel.mouse_location.y - this.viewModel.pan_start.y;
    const dx: number =
      this.viewModel.mouse_location.x - this.viewModel.pan_start.x;

    if (!this.viewModel.lockPanY) {
      this.viewModel.drawing_origin.x = this.viewModel.pan_start_origin.x + dx;
    }
    this.viewModel.drawing_origin.y = this.viewModel.pan_start_origin.y + dy;
  }

  @HostListener('window:resize')
  getSizes(): void {
    this.getDrawingDimensions();
    this.viewModel.screenHeight = window.innerHeight;
    this.viewModel.screenWidth = window.innerWidth;
    if (this.viewModel.lockPanY) {
      this.viewModel.drawing_origin.x = this.viewModel.drawing_width / 2;
    }
  }

  getDrawingDimensions(): void {
    this.viewModel.drawing_width = this.drawingSvg.nativeElement[
      'width'
    ].baseVal.value;
    this.viewModel.drawing_height = this.drawingSvg.nativeElement[
      'height'
    ].baseVal.value;
  }

  pixelToCoord(pixel: PixelCoord): DrawingCoord {
    const x =
      (pixel.x - this.viewModel.drawing_origin.x) /
      this.viewModel.drawing_scale;
    const y =
      (pixel.y - this.viewModel.drawing_origin.y) /
      this.viewModel.drawing_scale;

    return new DrawingCoord(x, y);
  }
}
