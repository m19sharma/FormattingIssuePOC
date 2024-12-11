import { Module } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';

const agGridModules: Module[] = [
    RichSelectModule,
    ExcelExportModule,
    ClipboardModule,
    ServerSideRowModelModule,
    MasterDetailModule,
    ClientSideRowModelModule,
    SideBarModule,
    FiltersToolPanelModule,
    ColumnsToolPanelModule,
    MenuModule,
    RangeSelectionModule,
    RowGroupingModule,
    SparklinesModule,
    StatusBarModule
];

export default agGridModules;