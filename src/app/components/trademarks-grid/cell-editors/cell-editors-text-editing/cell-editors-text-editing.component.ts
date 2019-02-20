import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-text-editing',
  templateUrl: './cell-editors-text-editing.component.html',
  styleUrls: ['./cell-editors-text-editing.component.scss']
})

export class CellEditorsTextEditingComponent implements ICellEditorAngularComp {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  getValue(): void { }
}
