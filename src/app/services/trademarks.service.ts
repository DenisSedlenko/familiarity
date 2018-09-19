import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TrademarkResults } from '../models/trademark-results.model';

@Injectable()
export class TrademarksService {
  private trademarks: TrademarkResults[];
  private trademarksSubject = new BehaviorSubject<TrademarkResults[]>(null);

  constructor() {
    this.trademarks = new Array<TrademarkResults>();
    this.trademarksSubject.next(this.trademarks);
  }

  get asObservable(): Observable<TrademarkResults[]> {
    return this.trademarksSubject;
  }

  get getTrademarks(): Array<TrademarkResults> {
    return this.trademarks;
  }

  updateTrademarks(trademarks: TrademarkResults[]) {
    this.trademarks = trademarks;
    this.trademarksSubject.next(this.trademarks);
  }
}
