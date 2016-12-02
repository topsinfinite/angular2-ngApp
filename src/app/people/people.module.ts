import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { NewpersonComponent } from './newperson/newperson.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
   PeopleComponent
  ],
  declarations: [PeopleComponent, ProfileComponent, NewpersonComponent]
})
export class PeopleModule { }
