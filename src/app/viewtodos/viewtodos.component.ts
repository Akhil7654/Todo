import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtodos',
  templateUrl: './viewtodos.component.html',
  styleUrls: ['./viewtodos.component.css']
})
export class ViewtodosComponent implements OnInit {

  constructor(private api:ApiService) {
api.viewtodos().subscribe(

  (Hey)=>{
    this.data=Hey
  }
)

   }

  ngOnInit(): void {
  }
    data:any=[]
  }
  
      
    