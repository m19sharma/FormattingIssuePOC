import * as React from 'react';
import { useMemo } from 'react';
import { GridOptions } from '@ag-grid-community/core';
import { LicenseManager } from '@ag-grid-enterprise/core';
import {
  Adaptable,
  AdaptableApi,
  AdaptableButton,
  AdaptableOptions,
  AdaptableStateFunctionConfig,
  CustomToolbarButtonContext,
  CustomToolPanelButtonContext,
  ToolPanelButtonContext,
} from '@adaptabletools/adaptable-react-aggrid';
import { columnDefs, defaultColDef } from './columnDefs';
import { WebFramework, rowData } from './rowData';
import { agGridModules } from './agGridModules';
import { CustomSettingsPanel } from '../CustomSettingsPanel.tsx';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { QuickSearchCustomComponent } from '../QuickSearchCustomComponent.tsx';
import { counterSelector, storeRedux } from '../store-redux.ts';

LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_LICENSE_KEY);

const CONFIG_REVISION = 1;

export const AdaptableAgGrid = () => {
  const gridOptions = useMemo<any>(
    () => ({
      defaultColDef,
      columnDefs,
      rowData,
      stopEditingWhenCellsLoseFocus: true,
      autoGroupColumnDef: {
        "headerName": "Financial Statement",
        "width": 450,
        'hide': false,
        'pinned': 'left',
        "editable": true,
        "cellRendererParams": {
          "suppressCount": true
        },
        "headerTooltip": "Group",
      },
      getDataPath: (data: { name: any; }) => data.name,
      treeData: true,
      statusBar: undefined,
      rowGroupPanelShow: undefined,
      sideBar: true,
      groupDisplayType: undefined,
      suppressMenuHide: true,
      enableRangeSelection: true,
      enableCharts: true,
    }),
    []
  );
  const adaptableOptions = useMemo<any>(
    () => ({
      licenseKey:  import.meta.env.VITE_ADAPTABLE_LICENSE_KEY,
      // primaryKey: 'id',
      // userName: 'Test User',
      adaptableId: 'Adaptable React Demo',
      // adaptableStateKey: 'adaptable_react_demo',
      // Typically you will store State remotely; here we simply leverage local storage for convenience
      predefinedConfig: {
        FormatColumn: {
          FormatColumns: [
            {
              Scope: {
                ColumnIds: ['2024', '2025', '2026'],
              },
              DisplayFormat: {
                Formatter: 'NumberFormatter',
                Options: {
                  FractionDigits: 2,
                  Suffix: '%',
                  Multiplier: 100,
                },
              },
            },]
        },
      },
    }),
    []
  );

  const adaptableApiRef = React.useRef<AdaptableApi>();

  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => dispatch({ type: 'counter/incremented' })}>increment</button>
        <button onClick={() => dispatch({ type: 'counter/decremented' })}>decrement</button>
        <b style={{ marginLeft: 10 }}>{count}</b>
      </div>
      <Adaptable.Provider
        gridOptions={gridOptions}
        adaptableOptions={adaptableOptions}
        modules={[...agGridModules]}
        onAdaptableReady={({ adaptableApi }) => {
          // save a reference to adaptable api
          adaptableApiRef.current = adaptableApi;
        }}
      >
        <div style={{ display: 'flex', flexFlow: 'column', height: '100vh' }}>
          <Adaptable.UI style={{ flex: 'none' }} />
          <Adaptable.AgGridReact className="ag-theme-alpine" />
        </div>
      </Adaptable.Provider>
    </div>
  );
};
