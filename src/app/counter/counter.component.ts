import { Component } from "@angular/core";

@Component({
    selector: 'app-counter' ,
    template: `
        <h3>Counter: </h3>{{counter}}
        
        <button (click)="decreaseByOne()">-</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseByOne()">+</button>
    `
})
export class counterComponent{
    public title:string = 'Mi Primera App de Angular';
    public counter:number = 0;

    increaseByOne():void{
        this.counter++;
      }
    
      reset(){
        this.counter=0;
      }
      decreaseByOne():void{
        if(this.counter > 0)
        this.counter--;
      }
}