import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username :any;

  constructor(@Inject(DOCUMENT) private document: Document,private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  signout()
  {
    localStorage.clear();
    this.router.navigate(['/pages-login']);

  }
}
