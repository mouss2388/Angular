import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h2>
                Welcome {{name}}
              </h2>
              <button (click)="onClick($event)"> Greet </button>
              <button (click)="greeting='Welcome Vishwas'"> Greet </button>

              {{greeting}}
              `
  ,
  styles: [`
        `]
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';


  public greeting = '';
  constructor() { }



  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

}
