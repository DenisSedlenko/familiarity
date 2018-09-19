import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-logo-renderer',
  templateUrl: './cell-renderer-logo.component.html',
  styleUrls: ['./cell-renderer-logo.component.scss']
})

export class CellRendererLogoComponent implements ICellRendererAngularComp {

  private params: any;
  private styleLogo;

  agInit(params: any): void {
    this.params = params;
    this.styleLogo = {
      'background-image': 'url(' + params.value + ')'
    };
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
}
