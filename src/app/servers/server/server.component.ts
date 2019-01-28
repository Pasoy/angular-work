import { Component } from '@angular/core';

@Component({
  selector: 'pasoy-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'online';

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }

  constructor() { }

}
