import { ColDef } from '@ag-grid-community/core';
import { WebFramework } from './rowData';

export const defaultColDef: ColDef = {
  "resizable": true,
  "sortable": true,
  "filter": false,
  "floatingFilter": false,
  "wrapHeaderText": true,
  "autoHeaderHeight": true,
  "enableRowGroup": true,
  "allowedAggFuncs": [
      "sum",
      "avg"
  ]
};

export const columnDefs: any[] = [
  {
      "field": "boolean",
      "width": 50,
      "pinned": "left",
      "checkboxSelection": true
  },
  {
      "field": "Entity Name",
      "id": "Entity Label",
      "headerName": "Deal Name",
      "width": 320,
      "pinned": "left",
      "filter": true,
      "floatingFilter": true
  },
  {
      "title": "Issuer",
      "headerHozAlign": "left",
      "width": 320,
      "field": "Issuer",
      "hozAlign": "left",
      "pinned": "left",
      "headerSort": true,
      "filter": true,
      "floatingFilter": true
  },
  {
      "field": "dueDate",
      "headerName": "LATEST DUE DATE",
      "width": 140,
      "pinned": "left",
      "type": "abColDefDate",
      "filter": true,
      "floatingFilter": true,
      "dType": "abColDefDate",
      "columnFormat": {
          "Formatter": "CustomDateFormatter"
      }
  },
  {
      "field": "meghna",
      "colId": "meghna",
      "headerName": "meghna"
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q3 2024",
      "colId": "Q3 2024",
      "headerName": "Q3 2024",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q2 2024",
      "colId": "Q2 2024",
      "headerName": "Q2 2024",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q1 2024",
      "colId": "Q1 2024",
      "headerName": "Q1 2024",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q4 2023",
      "colId": "Q4 2023",
      "headerName": "Q4 2023",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q3 2023",
      "colId": "Q3 2023",
      "headerName": "Q3 2023",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q2 2023",
      "colId": "Q2 2023",
      "headerName": "Q2 2023",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q1 2023",
      "colId": "Q1 2023",
      "headerName": "Q1 2023",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q4 2022",
      "colId": "Q4 2022",
      "headerName": "Q4 2022",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q3 2022",
      "colId": "Q3 2022",
      "headerName": "Q3 2022",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q2 2022",
      "colId": "Q2 2022",
      "headerName": "Q2 2022",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q1 2022",
      "colId": "Q1 2022",
      "headerName": "Q1 2022",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  },
  {
      "width": 150,
      "type": "abColDefString",
      "cellStyle": {
          "alignItems": "center"
      },
      "editable": false,
      "field": "Q4 2021",
      "colId": "Q4 2021",
      "headerName": "Q4 2021",
      "headerClass": "DmGridLegendsHeader",
      "cellClass": "DmGridLegendsCell",
      "suppressMenu": true,
      "cellRendererParams": {
          "keysToIgnoreFromTData": [
              "id",
              "DateFormat"
          ],
          "allDataColumns": {
              "Entity Name": "Deal Name",
              "dueDate": "LATEST DUE DATE"
          },
          "legendsInfo": [
              {
                  "id": "Missing",
                  "style": {
                      "backgroundColor": "#f2cbc7",
                      "color": "#93514a"
                  }
              },
              {
                  "label": "Available Test",
                  "id": "Available",
                  "style": {
                      "backgroundColor": "#c0e5d6",
                      "color": "#4b8a71"
                  }
              },
              {
                  "id": "Approved",
                  "label": "Approved",
                  "style": {
                      "backgroundColor": "#acd5ed",
                      "color": "#32566b"
                  }
              }
          ]
      },
      "dType": "abColDefString",
      "columnFormat": {
          "Formatter": "CustomNumeralFormatter"
      }
  }
]

// export const columnDefs: any[] = [
//   {
//     field: 'id',
//     type: 'abColDefNumber',
//     hide: true,
//     editable: false,
//   },
//   {
//     field: 'name',
//     type: 'abColDefString',
//     sortable: true,
//   },

//   {
//     field: 'language',
//     type: 'abColDefString',
//     enablePivot: true,
//     enableRowGroup: true,
//   },
//   {
//     field: 'github_stars',
//     headerName: 'GitHub Stars',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   {
//     field: 'license',
//     type: 'abColDefString',
//     editable: false,
//     enablePivot: true,
//     enableRowGroup: true,
//   },
//   {
//     id:'week_issue_change',
//     colId:'week_issue_change',
//     field: 'week_issue_change',
//     headerName: 'Issue Change',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   {
//     field: 'created_at',
//     headerName: 'Created',
//     type: 'abColDefDate',
//   },
//   {
//     field: 'has_wiki',
//     headerName: 'Has Wiki',
//     type: 'abColDefBoolean',
//     enablePivot: true,
//     enableRowGroup: true,
//   },
//   {
//     field: 'updated_at',
//     headerName: 'Updated',
//     type: 'abColDefDate',
//   },
//   {
//     field: 'pushed_at',
//     headerName: 'Pushed',
//     type: 'abColDefDate',
//   },
//   {
//     field: 'github_watchers',
//     headerName: 'GitHub Watchers',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   {
//     field: 'description',
//     type: 'abColDefString',
//     sortable: false,
//   },
//   {
//     field: 'open_issues_count',
//     headerName: 'Open Issues',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   {
//     field: 'closed_issues_count',
//     headerName: 'Closed Issues',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },

//   {
//     field: 'open_pr_count',
//     headerName: 'Open PRs',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   {
//     field: 'closed_pr_count',
//     headerName: 'Closed PRs',
//     type: 'abColDefNumber',
//     enableValue: true,
//   },
//   { field: 'has_projects', headerName: 'Has Projects', type: 'abColDefBoolean' },
//   { field: 'has_pages', headerName: 'Has Pages', type: 'abColDefBoolean' },
//   {
//     field: 'topics',
//     type: 'abColDefString',
//     editable: false,
//     sortable: false,
//   },
// ];
