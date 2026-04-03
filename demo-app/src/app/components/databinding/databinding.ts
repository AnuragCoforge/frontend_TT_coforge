import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  name = "anurag";
  color = "green";
  isActive = true;
  imageUrl = "public/test_image.jpeg";
  customBorder = "5px";
  tblFontColor = "red";
  
  // Event Binding -----
  value = 0;
  textColor = "blue";
  changeColor() {
    this.textColor = this.textColor === "blue"? "green": "blue";
  }
  inc() {
    this.value++;
  }
  dec() {
    if(this.value>0){
      this.value--;
    }
    else{
      this.value=0;
    }
  }
}

