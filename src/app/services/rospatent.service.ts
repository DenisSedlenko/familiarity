import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrademarkRequest } from '../models/trademark-request.model';
import { TrademarkResults } from '../models/trademark-results.model';

@Injectable()
export class RospatentService {

  constructor(private httpClient: HttpClient) { }
  endpoint = 'http://localhost:5000/api/rospatent/trademarks';

  getAllTrademarks(requestBody: TrademarkRequest) {
    return this.httpClient.post<Array<TrademarkResults>>(this.endpoint, requestBody);
  }

  getTrademarkLogo(id: string) {
    return this.httpClient.get(this.endpoint + '/' + id, { responseType: 'text' });
  }
}
