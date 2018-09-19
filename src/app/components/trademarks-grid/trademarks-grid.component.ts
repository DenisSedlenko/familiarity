import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { TrademarksService } from '../../services/trademarks.service';
import { CellRendererLogoComponent } from './cell-renderers-components/cell-renderer-logo.component';

@Component({
    selector: 'app-trademarks-grid',
    templateUrl: './trademarks-grid.component.html',
    styleUrls: ['./trademarks-grid.component.scss']
})

export class TrademarksGridComponent implements OnInit {
    private gridOptions: GridOptions;
    private icons: any;
    heightTable: string;
    public rowData: any[];
    public columnDefs: any[];
    public rowCount: string;
    private frameworkComponents;
    private api: GridApi;
    private columnApi: ColumnApi;

    constructor(private trademarksService: TrademarksService) { }

    ngOnInit() {
      this.gridOptions = <GridOptions>{};
    //   this.trademarksService.asObservable.subscribe(tm =>
    //     this.rowData = tm);
      this.columnDefs = this.createColumnDefs();
      this.frameworkComponents = {
        logoRenderer: CellRendererLogoComponent
      };
    }

    private onReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;

        params.api.sizeColumnsToFit();
        window.addEventListener('resize', function() {
          setTimeout(function() {
            params.api.sizeColumnsToFit();
          });
        });
    }

    private createColumnDefs() {
        const columnDefs = [
          {
              headerName: 'Логотип',
              field: 'logo',
              cellRenderer: 'logoRenderer',
              minWidth: 150
          },
          {
              headerName: 'Номер товарного знака',
              field: 'idTrademark',
              editable: true
          },
          {
              headerName: 'Номер заявки на регистрацию товарного знака',
              field: 'idRequest',
              editable: true
          },
          {
            headerName: 'Название',
            field: 'title',
            editable: true
          }
        ];

        return columnDefs;
    }
}
