import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
//import { MatFormFieldModule } from '@angular/material/form-field';
import {MatFormField} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@NgModule({

  imports: [MatFormField, MatButtonModule]
 
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit() { }



}



