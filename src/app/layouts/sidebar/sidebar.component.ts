import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidemenu : any;
  constructor() { }

  ngOnInit(): void {

    this.sidemenu = localStorage.getItem('role');
  }

}
