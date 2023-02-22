import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiDataService } from 'src/app/service/api-data.service';
import { api_route } from 'src/app/service/api-route';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user_role : any;
  attendance_list:any; 
  dashboard_data : any;
  page: number = 1;
  empPage:number=1;
  empPage2:number=1
  constructor(private router: Router,
    public apiCallMethod:ApiDataService
    ) {
      
   }

  ngOnInit(): void {
    
    this.user_role = localStorage.getItem('role');
    if(this.user_role==null)
    {
      this.router.navigate(['/pages-login']);
    }
    else {
        
        let userApi = (this.user_role == 'admin') ? api_route.attendenceAS : api_route.attendenceM456;

              this.apiCallMethod.get(userApi).then((res: any)=>{
                console.log('res of admin',res)
                this.dashboard_data = res.data;
                this.renderChart([
                  'Present',
                  'Leave',
                  'Late'
                ],[res.data.countView.totalEmployee,res.data.countView.totalLate,res.data.countView.totalLeave],{},'pie','piechart');
                this.renderChart([
                  'Present',
                  'Leave',
                  'Late'
                ],[res.data.countView.totalEmployee,res.data.countView.totalLate,res.data.countView.totalLeave],{},'line','lineChart');
              }).catch((error)=>{
                console.log(error)
              })
        
        
    } 


    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../assets/js/main.js";
    // this.elementRef.nativeElement.appendChild(s);

    // this.dashboard_data = {
    //   "total_employee": "145",
    //   "holidays": "5"
    // }; 
    
    this.attendance_list = [
      {
          "id": 1,
          "name": "Mr. Anuvab ", 
          "intime": "9.30am",
          "outtime": "18.30pm",
          "status": "Present",
          "status_color" : 'bg-success'
          
      },
      {
          "id": 2,
          "name": "Mrs. Radha ",
          "intime": "9.32am",
          "outtime": "18.35pm",
          "status": "Present",
          "status_color" : 'bg-success'
      },
      {
          "id": 3,
          "name": "Mr. Dipak ",       
          "intime": "9.35am",
          "outtime": "18.35pm",
          "status": "Present",
          "status_color" : 'bg-success'
      },
      {
        "id": 4,
        "name": "Mr. Arindam ",   
        "intime": "",
        "outtime": "",
        "status": "Absent",
        "status_color" : 'bg-danger'
      },
      {
        "id": 5,
        "name": "Mr. Tanmoy ", 
        "intime": "9.50am",
        "outtime": "18.40pm",
        "status": "Late",
        "status_color" : 'bg-warning'
      },
      {
        "id": 6,
        "name": "Mr. Anuvab ", 
        "intime": "9.30am",
        "outtime": "18.30pm",
        "status": "Present",
        "status_color" : 'bg-success'
        
    },
    {
        "id": 7,
        "name": "Mrs. Radha ",
        "intime": "9.32am",
        "outtime": "18.35pm",
        "status": "Present",
        "status_color" : 'bg-success'
    },
    {
        "id": 8,
        "name": "Mr. Dipak ",       
        "intime": "9.35am",
        "outtime": "18.35pm",
        "status": "Present",
        "status_color" : 'bg-success'
    },
    {
      "id": 9,
      "name": "Mr. Arindam ",   
      "intime": "",
      "outtime": "",
      "status": "Absent",
      "status_color" : 'bg-danger'
    },
    {
      "id": 10,
      "name": "Mr. Tanmoy ", 
      "intime": "9.50am",
      "outtime": "18.40pm",
      "status": "Late",
      "status_color" : 'bg-warning'
    },
    {
      "id": 11,
      "name": "Mr. Anuvab ", 
      "intime": "9.30am",
      "outtime": "18.30pm",
      "status": "Present",
      "status_color" : 'bg-success'
      
  },
  {
      "id": 12,
      "name": "Mrs. Radha ",
      "intime": "9.32am",
      "outtime": "18.35pm",
      "status": "Present",
      "status_color" : 'bg-success'
  },
  {
      "id": 13,
      "name": "Mr. Dipak ",       
      "intime": "9.35am",
      "outtime": "18.35pm",
      "status": "Present",
      "status_color" : 'bg-success'
  },
  {
    "id":14,
    "name": "Mr. Arindam ",   
    "intime": "",
    "outtime": "",
    "status": "Absent",
    "status_color" : 'bg-danger'
  },
  {
    "id": 15,
    "name": "Mr. Tanmoy ", 
    "intime": "9.50am",
    "outtime": "18.40pm",
    "status": "Late",
    "status_color" : 'bg-warning'
  },{
    "id": 16,
    "name": "Mr. Anuvab ", 
    "intime": "9.30am",
    "outtime": "18.30pm",
    "status": "Present",
    "status_color" : 'bg-success'
    
},
{
    "id": 17,
    "name": "Mrs. Radha ",
    "intime": "9.32am",
    "outtime": "18.35pm",
    "status": "Present",
    "status_color" : 'bg-success'
},
{
    "id": 18,
    "name": "Mr. Dipak ",       
    "intime": "9.35am",
    "outtime": "18.35pm",
    "status": "Present",
    "status_color" : 'bg-success'
},
{
  "id": 19,
  "name": "Mr. Arindam ",   
  "intime": "",
  "outtime": "",
  "status": "Absent",
  "status_color" : 'bg-danger'
},
{
  "id": 20,
  "name": "Mr. Tanmoy ", 
  "intime": "9.50am",
  "outtime": "18.40pm",
  "status": "Late",
  "status_color" : 'bg-warning'
}
    ];
  }

  // function for chart display

  renderChart(labelData:any,mainData:any,colorData:any,typeOfChart:any,idOfChart:any){
    
    new Chart(idOfChart, {
        type:typeOfChart,
        data: {
              labels: labelData,
              datasets: [{
                label: 'My First Dataset',
                data: mainData,
                backgroundColor: [
                  'rgb(25 135 84)',
                  'rgb(255, 99, 132)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
                tension: 0.1,
                fill: false,
              }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
    });
  }
}
