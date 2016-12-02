import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people=[];
  isAddingNew:boolean=false;
  constructor() { }

  ngOnInit() {
    this.people=[
      {
        name:"Temitope Fatayo",
        status:'currently coding...',
        website:{
           url:'http://cxp.com.ng',
           name:'cxp.com.ng'
        },
        twitter:{
          url:'http://twitter.com/topsinfinite',
          name:'@topsinfinite'
        }
      },
       {
         name:'Wale Ajiboye',
         status:'currently at unilag',
         twitter:{
           url:'http://twitter.com/waisty',
           name:'Waisty'
         }
       }
    ];
  }
  onSubmit(newperson){
   this.people.push(newperson);
  }
  onCancel(){
    this.isAddingNew=false;
  }

}
