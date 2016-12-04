import { Component, OnInit } from '@angular/core';

import{PeopleService} from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people=[];
  isAddingNew:boolean=false;
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.peopleService.fetchPeople()
    .subscribe(data=>{
      this.people=data;
    });
  }
  onSubmit(newperson){
   this.people.push(newperson);
  }
  onCancel(){
    this.isAddingNew=false;
  }

}
