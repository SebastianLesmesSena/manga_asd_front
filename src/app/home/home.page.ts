import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.questInto();
  }

  list:string = 'false';
  cargo: any = []
  questInto(){
    if(this.cargo === null){
      this.cargo = 'visitante'
    };
  }
  getUsuarios(){}

  changeList(){
    if(this.list = 'false'){ this.list = 'true'}
    else if (this.list = 'true'){ this.list = 'false'}
  }

}
