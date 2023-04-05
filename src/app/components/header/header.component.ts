import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public active : boolean = false

  constructor(){}
  ngOnInit() : void{}

  setActive() : void{
    this.active = true
  }
  setOff() : void{
    this.active = false
  }
}

