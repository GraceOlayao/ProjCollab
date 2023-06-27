import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 
  
  constructor(private router:Router){}

  user_records:any[]=[];
  data={
    un:"",
    pass:"",
  }
  doLogin(Values:any){
    this.user_records=JSON.parse(localStorage.getItem("users")||'{}');
    if(this.user_records.some((v)=>{
      return v.un==this.data.un && v.pass==this.data.pass
    })){
      alert("Login Successful");
      this.router.navigate(['/Home']);
    }
    else{
      alert("Login Failed");
    }
  }
  ngOnInit(): void {
   
  }

}
