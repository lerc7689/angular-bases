import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({
    providedIn: 'root'
})
export class dbzService {
    public charactersFather: Character[] = [
        {id: uuid(), name:"Goku", power:9500}, 
        {id: uuid(), name:"Vegueta", power:7500},
        {id: uuid(), name:"Krylin", power:1000}
    ]

    addCharacter( character: Character ):void{

        const newCharacter = { id: uuid(), ...character}
        this.charactersFather.push(newCharacter)
    }

    // onDelete( index: number ):void{
        
    //     this.charactersFather.splice(index, 1)
    // }

    onDeleteCharacterById(id: string){
        this.charactersFather = this.charactersFather.filter((character)=> character.id !== id);
    }
    
}