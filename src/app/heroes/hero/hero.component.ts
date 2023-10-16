import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = "Spiderman";
  public edad:number = 45;
  public showResetButton:boolean = false;

  changeName(): void{
    this.name = "Batman";
    this.showResetButton = true;
  }

  changeEdad(): void{
    this.edad = 35;
    this.showResetButton = true;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.edad}`;
  }

  reset():void{
    this.name = "Spiderman"
    this.edad = 45;
    this.showResetButton = false;
  }
}
