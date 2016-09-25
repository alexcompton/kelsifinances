export class BalanceItem {

    public date: Date;
    public checking: number;
    public savings: number;
    public paycheck: number;
    public credit: number;

    constructor(date?: Date, checking?: number, savings?: number, paycheck?: number, credit?: number) {
        this.date = date || new Date(1970,1,1);
        this.checking = checking || 0.0;
        this.savings = savings || 0.0;
        this.paycheck = paycheck || 0.0;
        this.credit = credit || 0.0;
    }
}