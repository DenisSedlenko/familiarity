import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame, remote } from 'electron';
import * as fs from 'fs';

@Injectable()
export class ElectronService {

  ipcRenderer: Electron.IpcRenderer;
  webFrame: Electron.WebFrame;
  remote: Electron.Remote;
  fs: any;

  constructor() {
    this.ipcRenderer = ipcRenderer;
    this.webFrame = webFrame;
    this.remote = remote;

    this.fs = fs;
  }
}
