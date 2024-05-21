import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {


  chartData: any[] = [];
  chartType: ChartType = ChartType.PieChart;
  chartOptions = {
    title: 'Expenses by Category',
    pieHole: 0.4
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getExpensesByCategory();
  }

  getExpensesByCategory() {
    this.expenseService.getExpensesByCategory().subscribe((res) => {
      this.chartData = res.map((item: any) => [item._id, item.total]);
    });
  }
}
