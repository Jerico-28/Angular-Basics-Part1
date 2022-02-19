import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
    .text-orange{
      color: orange;
    }
    .text-danger{
      color: red;
    }
    .text-success{
      color: green;
    }
    .blue{
      color: blue;
    }
    .fontItalic{
      font-style: italic;
    }
    .green{
      background-color:green
    }
    .red{
      background-color:red
    }
  `]
})
export class TestComponent implements OnInit {

  // Property Binding
  public anID = "testID";
  public isDisabled = true;

  // Class Binding
  public textOrange = "text-orange";
  public isSuccess = true;
  public hasError = true;
  public isSet = true;

  // 2 Way Binding
  public myValue = "";

  public setofClasses = {
    "text-success": !this.isSuccess,
    "text-danger": this.hasError,
    "fontItalic": this.isSet
  }

  // Event Binding
  toggle = true; // Success
  status = 'Success';

  enableBinding(){
    // true       false
    this.toggle = !this.toggle;
    //              If       then true  Else  false
    this.status = this.toggle ? 'Success' : 'Warning';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  // Event Binding
  enableText(){
    this.isDisabled = false;
  }

}
