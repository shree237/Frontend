import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ExpenseService } from '../services/expense.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  constructor(private router:Router , private auth:AuthService, private expense:ExpenseService, private toastr: ToastrService){

  }

  title:string= '';
  amount:number= 0;
  comments:string ='';
  category:string = '';

  token =  this.auth.getToken();

  addExpense(expense:any){
    console.log(expense);
    this.expense.addExpense(expense).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Expense added successfully!', 'Success', {
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error(error);
      this.toastr.error('Failed to add expense.', 'Error',
      {
        positionClass: 'toast-bottom-right'
      }
      );
    });
  }

}
