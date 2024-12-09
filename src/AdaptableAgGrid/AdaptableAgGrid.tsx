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
      "sideBar": true,
      "suppressRowGroupHidesColumns": true,
      "rowGroupPanelShow": "always",
      "groupDisplayType": "groupRows",
      "groupDefaultExpanded": 1,
      "rowSelection": "multiple",
      "stopEditingWhenCellsLoseFocus": true,
      "suppressRowClickSelection": true,
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
      "layoutOptions": {
          "createDefaultLayout": true,
          "displayRowGroups": "expanded"
      },
      "quickSearchOptions": {
          "filterResultsAfterQuickSearch": true
      },
      "predefinedConfig": {
          "Theme": {
              "UserThemes": [
                  {
                      "Name": "ivprad",
                      "Description": "User Made Theme",
                      "AgGridClassName": "ag-theme-balham",
                      "Uuid": "ce7118f4-e043-43ba-9c13-934c858a88a4"
                  }
              ],
              "CurrentTheme": "ivprad",
              "Uuid": "fb142cea-acc3-477c-a1a3-7fcd01cbd9e0"
          },
          "StatusBar": {
              "StatusBars": [
                  {
                      "Key": "Center Panel",
                      "StatusBarPanels": [
                          "Layout"
                      ],
                      "Uuid": "5543bedb-cd0b-4c97-95fd-9750c2ad6ce0"
                  }
              ],
              "Uuid": "251c4346-2495-40b9-8b8b-f3431a385d15"
          },
          "FormatColumn": {
              "FormatColumns": [
                  {
                      "Scope": {
                          "ColumnIds": [
                              "dueDate"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "DateFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "dateCustomFormat"
                              ],
                              "dateFormat": "MM/DD/YYYY"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q3 2024"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q2 2024"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q1 2024"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q4 2023"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q3 2023"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q2 2023"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q1 2023"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q4 2022"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q3 2022"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q2 2022"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q1 2022"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  },
                  {
                      "Scope": {
                          "ColumnIds": [
                              "Q4 2021"
                          ]
                      },
                      "DisplayFormat": {
                          "Formatter": "NumberFormatter",
                          "Options": {
                              "CustomDisplayFormats": [
                                  "numeralCustomFormat"
                              ],
                              "numeralFormat": "1.2345a"
                          }
                      }
                  }
              ],
              "Uuid": "723c5cc6-4ed3-4ae6-8d23-213c7255abc1"
          },
          "Dashboard": {
              "ModuleButtons": [],
              "IsCollapsed": true,
              "Tabs": [
                  {
                      "Name": "Grid",
                      "Toolbars": [
                          "Manage Tools"
                      ]
                  }
              ]
          }
      },
     
      "adaptableId": "dmGrid",
  }),
    []
  );

  const adaptableApiRef = React.useRef<AdaptableApi>();

  const count = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => {
          adaptableApiRef?.current?.gridApi?.selectColumns(['meghna', 'Q3 2024']);
        }}>Select column</button>
        <button onClick={() => {
          adaptableApiRef?.current?.gridApi?.selectAll();
        }}>select all</button>
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
