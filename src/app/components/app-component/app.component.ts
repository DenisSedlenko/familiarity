import { Component, OnInit } from '@angular/core';
import { RospatentService } from '../../services/rospatent.service';
import { TrademarkRequest } from '../../models/trademark-request.model';
import { TrademarksService } from '../../services/trademarks.service';
import { ElectronService } from '../../services/electron.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor( private rospatentService: RospatentService,
    private trademarksService: TrademarksService,
    private electronService: ElectronService) { }

  title = 'Trademark';
  isLoading = false;

  ngOnInit() {
    const request = new TrademarkRequest();
    request.holder = 'татспиртпром';
    //this.isLoading = true;

    // this.rospatentService.getAllTrademarks(request).subscribe(
    //   result => {
    //     const tasks$ = [];
    //     result.forEach(rs => { tasks$.push(this.rospatentService.getTrademarkLogo(rs.idTrademark)); });
    //     forkJoin(...tasks$).subscribe(res => {
    //       res.map((r, i) => { result[i].logo = 'data:image/png;base64,' + r; });
    //       this.trademarksService.updateTrademarks(result);
    //       this.isLoading = false;
    //     });
    // });


    document.addEventListener('keydown', (e) => {
      if (e.which === 123) {
          this.electronService.remote.getCurrentWindow().webContents.toggleDevTools();
      } else if (e.which === 116) {
          location.reload();
      }
    });
  }
}
