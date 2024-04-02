import { LoanOption } from "./loan-option";

export interface Loan {
    loanAmount:number;
    roi:number;
    options:LoanOption[];
}
