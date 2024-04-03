import { Component } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  loan:Loan;

  constructor(private loanService:LoanService){
    this.loan={loanAmount:0,roi:0,options:[]};
  }

  formSubmitted(){
    this.loan = this.loanService.computeOptions(this.loan);
  }
}
