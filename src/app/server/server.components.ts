import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  name: String = 'ishraqe';
  age: Number = 25;
  isAllowed= false;
  methodName= "server down";
  getAge() {
    return this.age;
  }
  onChangeServer() {
    this.methodName="server is up";
  }
  constructor() {
    setTimeout(() => {
      this.isAllowed = true;
    }, 3000 );
  }

}
