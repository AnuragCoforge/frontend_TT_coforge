import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { SquarePipe } from '../../pipes/square-pipe';
import { LengthPipe } from '../../pipes/length-pipe';
import { SalutationPipe } from '../../pipes/salutation-pipe';

@Component({
  selector: 'app-demo',
  imports: [CommonModule, SquarePipe, LengthPipe, SalutationPipe],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  name:string = 'Anurag Tiwari';
  date= new Date();
  currency=CurrencyPipe
  amount=34567.897
  decimalValue=2212.54433
  discount = 0.75
  data="Anurag_Tiwari"
  student =  [
      {
      id:123, sname:'swapna', course:'java'
      },
      {
      id:123, sname:'swapna', course:'java'
      },
      {
      id:123, sname:'swapna', course:'java'
      }
  ]
  num:number=5
  myname="kusshu";

  user = {name:'Anurag', gender: 'M'}
}
