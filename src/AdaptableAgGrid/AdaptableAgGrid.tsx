import * as React from 'react';
import { useMemo } from 'react';
import { GridOptions } from '@ag-grid-community/core';
import { LicenseManager } from '@ag-grid-enterprise/core';
import AdaptableReact, { AdaptableApi } from '@adaptabletools/adaptable-react-aggrid';
import { columnDefs, defaultColDef } from './columnDefs';
import { WebFramework, rowData } from './rowData';
import agGridModules from './agGridModules';
import { CustomSettingsPanel } from '../CustomSettingsPanel.tsx';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { QuickSearchCustomComponent } from '../QuickSearchCustomComponent.tsx';
import { counterSelector, storeRedux } from '../store-redux.ts';
import { AgGridReact } from '@ag-grid-community/react';

LicenseManager.setLicenseKey(import.meta.env.VITE_AG_GRID_LICENSE_KEY);

const CONFIG_REVISION = 1;

export const AdaptableAgGrid = () => {
    const gridOptions = useMemo<any>(
        () => ({
            defaultColDef,
            "sideBar": true,
            "suppressRowGroupHidesColumns": true,
            "rowGroupPanelShow": "always",
            "groupDisplayType": "groupRows",
            "groupDefaultExpanded": 1,
            "rowSelection": "multiple",
            "stopEditingWhenCellsLoseFocus": true,
            "suppressRowClickSelection": true,
            cellSelection: true,
            rowData,
            columnDefs
        }),
        []
    );
    const adaptableOptions = useMemo<any>(
        () => ({
            "licenseKey": import.meta.env.VITE_ADAPTABLE_LICENSE_KEY,
            "autogeneratePrimaryKey": false,
            "primaryKey": "id",

            "adaptableId": "dmGrid",
        }),
        []
    );

    const adaptableApiRef = React.useRef<AdaptableApi>();
    const agGridApiRef = React.useRef<any>(null);

    const count = useSelector(counterSelector);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ marginBottom: 20 }}>
                <button onClick={() => {
                    adaptableApiRef?.current?.columnApi?.selectColumns(['meghna', 'Issuer']);
                    const rowCount = agGridApiRef.current.getDisplayedRowCount();
                    debugger
                    const cellRangeParams: any = {
                        rowStartIndex: 0,
                        rowEndIndex: rowCount - 1,
                        columnStart: 'meghna',
                        columnEnd: 'meghna',
                    };
                    agGridApiRef.current.addCellRange(cellRangeParams);
                }}>Select column</button>
                <button onClick={() => {
                    adaptableApiRef?.current?.gridApi?.selectAll();
                }}>select all</button>
                <b style={{ marginLeft: 10 }}>{count}</b>
            </div>
            {adaptableOptions &&
                <>
                    <AdaptableReact
                        style={{ flex: 'none' }}
                        gridOptions={gridOptions}
                        adaptableOptions={adaptableOptions}
                        onAdaptableReady={({ adaptableApi, gridOptions }) => {
                            adaptableApiRef.current = adaptableApi;
                            agGridApiRef.current = gridOptions.api;

                        }}
                    />
                    <div className="ag-theme-balham ag-theme-ivprad" style={{ flex: 1 }}>
                        <AgGridReact
                            gridOptions={gridOptions}
                            modules={agGridModules}
                            // enableBrowserTooltips={true}
                            tooltipInteraction={true}
                            tooltipShowDelay={500}
                        />
                    </div>
                </>
            }
        </div>
    );
};
