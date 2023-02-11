import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabbartop',
  templateUrl: './tabbartop.component.html',
  styleUrls: ['./tabbartop.component.css']
})
export class TabbartopComponent implements OnInit {
  tk:string= '';
  @Output() newItemEvent = new EventEmitter<string>();
    constructor() { }
    ngOnInit(): void {
    }
    findProd(value:string){
      this.newItemEvent.emit(value);
      console.log(this.tk);
    }
}
