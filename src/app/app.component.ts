import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Nilofar";
  title = "HelloWorld";
  imgURL="../assets/bridgelabz.png"
  userName : String="";
  onchangeImg(){
    console.log(this.name);

  }
  onchangeCall(){
    this.name="Mujawar";
    console.log(this.userName);
  }
  
}
