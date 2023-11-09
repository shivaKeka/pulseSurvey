import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from '../main-content/main-content.component';
import { Router,RouterLink } from '@angular/router';
import { LeftNavComponent } from '../navbar/left-nav/left-nav.component';
import { TopNavComponent } from '../navbar/top-nav/top-nav.component';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,LeftNavComponent,TopNavComponent,RouterOutlet,RouterLink,MainContentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  renderComponent:boolean=true;
  userDetails:any;

  constructor(private udService:UserDataService, public router:Router){}

  ngOnInit(){
  this.udService.getCredentials().subscribe((next:any)=>{
      if(JSON.stringify(next)!='{}'){
        this.userDetails = next;
        localStorage.setItem('currentUser',JSON.stringify(this.userDetails));
      }
    })
    this.router.navigate(['pulseSurvey/home/openSurveys']);
  }

  switchToProfile(value:any){
    if(value==="admin"){
      this.renderComponent=false;
      this.router.navigate(['pulseSurvey/home/Admin/surveys/active']);
    }
    if(value==="me"){
      this.renderComponent =true;
      this.router.navigate(['pulseSurvey/home/openSurveys']);
    }
  }
}
