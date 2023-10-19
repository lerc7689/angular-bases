import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // @Output()
  // public onDeleteEmiter : EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteEmiter : EventEmitter<string> = new EventEmitter();
  
  @Input()
  public characterSonList:Character[] = [
    {name:"Trunks", power:10}
  ]

  // onDeleteCharacter( index: number ):void{
  //   // console.log(index)
  //   this.onDeleteEmiter.emit(index);
  // }

  onDeleteCharacterByIdEmiterFunction( id?: string ):void{
    // console.log(index)
    if( !id ) return;
    this.onDeleteEmiter.emit(id);
  }
  
}
