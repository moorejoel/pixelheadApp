import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-overlay-list',
  templateUrl: './overlay-list.component.html',
  styleUrls: ['./overlay-list.component.scss']
})
export class OverlayListComponent implements OnInit {

  overlays: any[] = [];

  constructor(public overlayService: OverlayService) {
  }

  ngOnInit(): void {
    this.overlayService.getOverlays().subscribe(r => this.overlays = r)
  }

}
