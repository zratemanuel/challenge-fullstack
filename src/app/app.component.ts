import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: 'Challenge - Manuel Zarate';
  tableData: Array<ITableData>;
  tableSummary = {} as ITableData;
  tableSort = {
    column: '',
    isAscending: false
  };

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    // Retrieve data from API endpoint
    this.api.getData()
      .pipe(
        map(response => {
          const mappedData = {
            data: [...response[0].providers, ...response[0].directContractors],
            totals: response[0].total[0]
          };

          let workforceTotalPercentage = 0;
          mappedData.data.map(provider => {
            provider.workforce = provider.workerCount / mappedData.totals.workerCount; // calculate respresentative workforce fraction
            workforceTotalPercentage += provider.workforce; // summing the total for table summary
            provider.complianceScore = provider.complianceStats ? provider.complianceStats.Total / 100 : 0; // compliance score, else zero
            return provider;
          });
          mappedData.totals.workforce = workforceTotalPercentage;

          // Set summary compliance score as max value in data array to match data in design doc
          mappedData.totals.complianceScore = Math.max(...mappedData.data.map(obj => obj.complianceScore), 0);

          return mappedData;
        })
      )
      .subscribe(response => {
        this.tableData = response.data;
        this.tableSummary = response.totals;
        this.sort('name');
      });
  }

  // Handles sorting table data by column values
  sort(column: string): void {
    this.tableSort.isAscending = (this.tableSort.column === column) ? !this.tableSort.isAscending : true;
    this.tableSort.column = column;

    this.tableData = (this.tableSort.isAscending) ?
    this.tableData.sort((a, b) => 0 - (a[column] > b[column] ? -1 : 1)) : // sort ascending
    this.tableData.sort((a, b) => 0 - (a[column] > b[column] ? 1 : -1)); // sort descending

    if (this.tableSort.column === 'name') {
      this.tableData.unshift(this.tableData.splice(this.tableData.findIndex(obj => obj.providerId === 0), 1)[0]);
    }
  }

  // Handles click events on table column headers
  sortTableClick(event: Event): void {
    this.sort((event.target as Element).id);
  }
}

export interface ITableData {
  name: string;
  workerCount: number;
  complianceScore: number;
  grossPayTotal: number;
  payrollAdminTotal: number;
  labourCostTotal: number;
  workforce: number;
  providerId: number;
}
