import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter( character: Character ):void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    };

    this.characters.push(newCharacter);
    console.log("Push", { newCharacter })
  }

  // onDeleteCharacter( index: number):void {
  //   let remove = this.characters.splice(index,1);
  //   console.log({remove});
  // }

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id !== id);
  }

  constructor() {}
}
