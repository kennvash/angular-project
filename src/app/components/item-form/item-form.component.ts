import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../interfaces/item'
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input() isItemFormOpen: boolean = false;
  @Input() item: Item = {
    name: "",
    cost: 0,
  }
  @Output() saveEvent: EventEmitter<Item> = new EventEmitter();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  handleSave(): void {
    let i = {...this.item};

    this.itemService.saveItem(i).subscribe((it)  =>{
      this.saveEvent.emit(it);
      this.item.id = undefined;
      this.item.name = "";
      this.item.cost = 0;
    })
  }

}
