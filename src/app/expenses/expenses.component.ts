import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [DatePipe]
})
export class ExpensesComponent implements OnInit{
  expenses: any;
  isEditing: boolean = false;
  selectedExpense: any | null = null;
  selectedExpenseId: string = "";

  constructor(private expense: ExpenseService, private router: Router, private datePipe: DatePipe, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getexpenses()
  }
  getexpenses() {
    this.expense.getExpenses().subscribe((res) => {
      this.expenses = res;
    });
  }

  handleEdit(exp: any, id: string) {
    this.selectedExpenseId = id;
    this.isEditing = true;
    this.selectedExpense = exp;
  }

  async handleEditSubmit(exp: any) {
    await this.expense.updateExpense(this.selectedExpenseId, exp).subscribe((res) => {
      this.isEditing = false;
      this.getexpenses();
      this.toastr.success('Expense updated successfully!', 'Success');
      this.router.navigate(['/dashboard']);
    }, error => {
      this.toastr.error('Failed to update expense.', 'Error');
    });
  }

  async handleDelete(id: string) {
    await this.expense.deleteExpense(id).subscribe((res) => {
      this.getexpenses();
      this.toastr.success('Expense deleted successfully!', 'Success');
    }, error => {
      this.toastr.error('Failed to delete expense.', 'Error');
    });
  }
}
