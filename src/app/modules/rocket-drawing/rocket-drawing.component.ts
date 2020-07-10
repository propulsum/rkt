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
import { RocketDrawingViewModel } from './rocket-drawing.viewmodel';
import { CursorType } from './components/cursor/cursor.viewmodel';

@Component({
  selector: 'rkt-rocket-drawing',
  templateUrl: './rocket-drawing.component.html',
  styleUrls: ['./rocket-drawing.component.sass']
})
export class RocketDrawingComponent {
  @Input() viewModel: RocketDrawingViewModel = new RocketDrawingViewModel();

  @ViewChild('drawingSvg') drawingSvg: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.getSizes();
    this.viewModel.drawingOrigin = new PixelCoord(
      this.viewModel.drawingWidth / 2,
      0
    );
    this.cd.detectChanges();
  }

  detectedMouseDown(event: MouseEvent): void {
    this.viewModel.panStart = new PixelCoord(event.x, event.y);
    this.viewModel.panStart.x -=
      this.viewModel.screenWidth - this.viewModel.drawingWidth;
    this.viewModel.panStartOrigin = new PixelCoord(
      this.viewModel.drawingOrigin.x + 0,
      this.viewModel.drawingOrigin.y
    );
    this.viewModel.isPanning = true;
    this.viewModel.cursorViewModel.cursorType = CursorType.VPan;
  }

  detectedMouseLeave(): void {
    this.stopPanning();
    this.viewModel.cursorViewModel.showCursor = false;
  }

  detectedMouseEnter(): void {
    this.viewModel.cursorViewModel.showCursor = true;
  }

  stopPanning(): void {
    this.viewModel.isPanning = false;
    this.viewModel.cursorViewModel.cursorType = CursorType.CrossHairs;
  }

  mouseMove(mouse: MouseEvent): void {
    this.getSizes();
    this.viewModel.mouseLocation = new PixelCoord(mouse.x, mouse.y);
    this.viewModel.mouseLocation.x -=
      this.viewModel.screenWidth - this.viewModel.drawingWidth;

    this.viewModel.cursorViewModel.mouseLocation = this.viewModel.mouseLocation;

    this.viewModel.displayCoords = this.pixelToCoord(
      this.viewModel.mouseLocation
    ).print();

    if (this.viewModel.isPanning) {
      this.pan();
    }
  }

  detectedMouseWheel(event: WheelEvent): void {
    if (
      this.viewModel.drawingScale + event.deltaY <
      this.viewModel.drawingScaleMin
    ) {
      this.viewModel.drawingScale = this.viewModel.drawingScaleMin + 1;
      return;
    }
    if (
      this.viewModel.drawingScale + event.deltaY >
      this.viewModel.drawingScaleMax
    ) {
      this.viewModel.drawingScale = this.viewModel.drawingScaleMax - 1;
      return;
    }
    this.viewModel.drawingScale +=
      event.deltaY / this.viewModel.scrollWheelSpeed;
  }

  pan(): void {
    const dy: number =
      this.viewModel.mouseLocation.y - this.viewModel.panStart.y;
    const dx: number =
      this.viewModel.mouseLocation.x - this.viewModel.panStart.x;

    if (!this.viewModel.lockPanY) {
      this.viewModel.drawingOrigin.x = this.viewModel.panStartOrigin.x + dx;
    }
    if (
      this.viewModel.panStartOrigin.y + dy >
      this.viewModel.panMaxY * this.viewModel.drawingScale
    ) {
      this.viewModel.drawingOrigin.y =
        this.viewModel.panMaxY * this.viewModel.drawingScale - 1;
      return;
    }

    if (
      this.viewModel.panStartOrigin.y + dy <
      this.viewModel.panMinY * this.viewModel.drawingScale
    ) {
      this.viewModel.drawingOrigin.y =
        this.viewModel.panMinY * this.viewModel.drawingScale + 1;
      return;
    }

    this.viewModel.drawingOrigin.y = this.viewModel.panStartOrigin.y + dy;
  }

  @HostListener('window:resize')
  getSizes(): void {
    this.getDrawingDimensions();
    this.viewModel.screenHeight = window.innerHeight;
    this.viewModel.screenWidth = window.innerWidth;
    if (this.viewModel.lockPanY) {
      this.viewModel.drawingOrigin.x = this.viewModel.drawingWidth / 2;
    }
  }

  getDrawingDimensions(): void {
    this.viewModel.drawingWidth = this.drawingSvg.nativeElement[
      'width'
    ].baseVal.value;
    this.viewModel.drawingHeight = this.drawingSvg.nativeElement[
      'height'
    ].baseVal.value;
  }

  pixelToCoord(pixel: PixelCoord): DrawingCoord {
    const y =
      (pixel.x - this.viewModel.drawingOrigin.x) / this.viewModel.drawingScale;
    const x =
      (pixel.y - this.viewModel.drawingOrigin.y) / this.viewModel.drawingScale;

    return new DrawingCoord(x, y);
  }
}
