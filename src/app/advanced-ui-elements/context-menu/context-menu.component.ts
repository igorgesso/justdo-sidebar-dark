import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class MyContextMenuComponent implements OnInit {

  @ViewChild(ContextMenuComponent) public simpleMenu: ContextMenuComponent;
  @ViewChild(ContextMenuComponent) public actionMenu: ContextMenuComponent;
  
  constructor(private contextMenuService: ContextMenuService) { }

  @Input() contextMenu: ContextMenuComponent;

  ngOnInit() {
  }

  actionMenuClick(action) {
    alert('clicked : ' +  action );
  }

}
