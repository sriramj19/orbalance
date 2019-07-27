import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-balance-finder',
  templateUrl: './balance-finder.component.html',
  styleUrls: ['./balance-finder.component.scss']
})
export class BalanceFinderComponent implements OnInit {

  public actualAmount: number;
  public receivedAmount: number;

  @ViewChild('actualAmountEl') private actualAmountEl: ElementRef;
  @ViewChild('receivedAmountEl') private receivedAmountEl: ElementRef;

  public get balanceAmount(): number {
    let _validActualAmount: boolean = this.isNumberValid(this.actualAmount);
    let _validReceivedAmount: boolean = this.isNumberValid(this.receivedAmount);
    if (!_validActualAmount && !_validReceivedAmount) {
      return 0;
    } else if (_validActualAmount && !_validReceivedAmount) {
      return this.actualAmount;
    } else if (_validReceivedAmount && !_validActualAmount) {
      return -this.receivedAmount;
    } else {
      return Number(this.receivedAmount - this.actualAmount)
    }
  }

  public onEnter(event: 'actual' | 'received') {
    switch (event) {
      case 'actual':
        if (!this.receivedAmount || isNaN(this.receivedAmount)) {
          this.receivedAmountEl.nativeElement.focus();
        } else {
          this.actualAmountEl.nativeElement.blur();
        }
        break;
      case 'received':
        if (!this.actualAmount || isNaN(this.actualAmount)) {
          this.actualAmountEl.nativeElement.focus();
        } else {
          this.receivedAmountEl.nativeElement.blur();
        }
        break;
      default:
        break;
    }
  }

  constructor() { }

  private isNumberValid(num: number): boolean {
    return num !== undefined && num !== null && !isNaN(num);
  }

  ngOnInit() {
  }

}
