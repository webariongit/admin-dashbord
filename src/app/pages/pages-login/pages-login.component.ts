import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ApiDataService } from 'src/app/service/api-data.service';
import { api_route } from 'src/app/service/api-route';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  
  constructor(private router: Router,public apiCallMethod:ApiDataService) { 

    
  }

  ngOnInit(): void {
  }

  login(form:NgForm)
  {
   

    let username = form.value.username;
    let password = form.value.password;
    
    // login api implement
    
    this.apiCallMethod.get(api_route.user_login+`/${username}/${password}`)
        .then((resp:any)=>{

              localStorage.setItem('role',(resp.data=='A')?'admin':'emp');
              localStorage.setItem('username', username);
              this.router.navigate(['/dashboard']);
           
        }).catch((Error:any)=>{

            console.log('error',Error)
            
        })


    
  }


}
