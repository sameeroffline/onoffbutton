import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onoffbutton';

  imageone = false;
  imagetwo = true;


  
  img1() {
    this.imageone = !this.imageone;
    this.imagetwo = false
  }

  img2(){
    this.imagetwo = !this.imagetwo;
    this.imageone = false
  }
 
  
  color : any;



  sameer = {}
  sameer2 = {}
  sameer3 = {}
  sameer4 = {}



blue(){
  // alert('blue')
  this.sameer = {'background-color':'blue','color':'white'}
  this.sameer2=false
  this.sameer3=false
  this.sameer4=false
}

green(){
  this.sameer2 = {'background-color':'green','color':'white'}
  this.sameer=false
  this.sameer3=false
  this.sameer4=false
}

red(){
  this.sameer3 = {'background-color':'red','color':'white'}
  this.sameer=false
  this.sameer2=false
  this.sameer4=false
}

navy(){
  this.sameer4 = {'background-color':'navy','color':'white'}
  this.sameer=false
  this.sameer2=false
  this.sameer3=false
}




  
  answer = 'No answer yet'
  ngOnInit(): void {

  }


}
