import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   fetchData=()=>{
    this.myapi.viewaddcarts().subscribe(
      (data)=>{
        this.productadd=data
      }
    )
   }
   productadd:any=[]

  ngOnInit(): void {
  }

}
