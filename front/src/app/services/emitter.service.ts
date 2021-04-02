import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  @Output()  filterChange = new EventEmitter<boolean>();

  constructor() { }

  setCambios(){
    return this.filterChange;
  }
  changeFilter() {
    this.filterChange.emit(true)
  }


}
