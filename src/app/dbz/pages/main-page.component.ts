// import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPage{
    constructor(private DragonBallService : dbzService){}
    
  
    get charactersAccess(): Character[] {
        return this.DragonBallService.charactersFather;
    }

    onDeleteCharacterAccess ( id: string ): void {
        this.DragonBallService.onDeleteCharacterById(id)
    }

    onNewCharacterAccess(character: Character): void{
        this.DragonBallService.addCharacter(character)
    }
    // public charactersFather: Character[] = [
    //     {name:"Goku", power:9500}, 
    //     {name:"Vegueta", power:7500},
    //     {name:"Krylin", power:1000}
    // ]

    // onNewCharacter( character: Character ):void{
    //     console.log(character)
    //     this.charactersFather.push(character)
    // }

    // onDelete( index: number ):void{
        
    //     this.charactersFather.splice(index, 1)
    // }
}