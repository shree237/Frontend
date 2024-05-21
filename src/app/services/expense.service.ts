import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient , private auth:AuthService) { }

  readonly APIUrl = "http://localhost:5000/api/expense/"
  readonly token = this.auth.getToken()
  



  addExpense(expense: any) {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    
    
    return this.http.post<any>(this.APIUrl+'add', expense, {headers});
  }

  getExpenses() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(this.APIUrl+'getexpensebyid', {headers});
  }

  //
  getExpensesByCategory() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<any>(this.APIUrl + 'getExpensesByCategory', { headers });
  }

  updateExpense(id: string, expense: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.put<any>('http://localhost:5000/api/expense/update/' + id, expense, {headers});
  }

  deleteExpense(id: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.delete<any>('http://localhost:5000/api/expense/delete/' + id, {headers});
  }
}
