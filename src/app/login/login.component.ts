import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDataService } from '../service/my-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService:MyDataService,private http: HttpClient) { }
  private url = 'api/employees/get-all';

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  data:any;

  ngOnInit(): void {
    this.getData().subscribe(data => {
      this.data = data;
    })
}

  exp:boolean = true;
  subjects:any[] = [
    "calculus",
    "discrete",
    "Java 2",
    "HCI",
    "Java 1"
  ]

  action(){
    this.exp = !this.exp;
  }


  

}
