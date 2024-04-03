import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { LoanOption } from './loan-option';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  computeOptions(loan:Loan) : Loan{

    let {loanAmount,roi} = loan;

    let today = new Date();
    let startDate = new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
    let tenureOptions = [5,10,15,20,24];

    loan.options = tenureOptions.map( tenure => ({
      tenure:tenure,
      startDate:startDate,
      endDate:new Date(today.getFullYear(),today.getMonth()+tenure,today.getDate()),
      emi: (loanAmount*roi)/tenure
    }));

    return loan;
  }
}
