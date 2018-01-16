import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'users-table-toolbar',
  templateUrl: './users-table-toolbar.component.html',
  styleUrls: ['./users-table-toolbar.component.scss']
})
export class UsersTableToolbarComponent {
  @Output() onFilter = new EventEmitter<string>();
  selectedCountry = 'none';

  filter(country:string){
    this.onFilter.emit(country);
  }
}
