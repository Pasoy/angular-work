import {Component} from '@angular/core';

@Component({
  selector: 'pasoy-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  addServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server with the name ${this.serverName} was created!`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
