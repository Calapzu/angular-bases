import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  /**
   * El uso de @Input() es una forma efectiva de compartir datos desde el
   * componente padre al componente hijo y permite crear componentes
   * reutilizables y más interactivos en una aplicación Angular.
   *
   * Cuando un componente tiene una propiedad decorada con @Input(),
   * está indicando que esa propiedad puede recibir valores desde el
   * componente padre. El componente padre puede vincular datos a esta
   * propiedad utilizando la sintaxis de interpolación o propiedad en el
   * template del componente hijo.
   *
   * Desde el main-pages se va a mandar un listado de personajes
   * a el list-component para permitir esa comunicacion (Del padre al hijo)
   * La property que queremos recibir del mundo exterior
   */

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Trunk',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void {
  //   this.onDelete.emit(index);
  //   console.log({index});
  // }

  //Esta es una opcion para solucionar el problema
  //cambiar el metodo a eliminarPorId
  onDeleteById(id?:string):void {
    if( !id ) return;
    this.onDelete.emit(id);
  }
}
