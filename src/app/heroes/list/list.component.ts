import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Batman', 'Hulk', 'Superman']
  public deletedHero:string = '';
  removesHero(){
    this.deletedHero = this.heroNames.pop()!;
  }
}
