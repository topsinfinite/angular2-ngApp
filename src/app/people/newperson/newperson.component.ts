import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  @Output() onsubmitted:EventEmitter<any>=new EventEmitter();
  @Output() oncancel:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(newperson){
    this.onsubmitted.emit(newperson)
  }
  cancel(){
    this.oncancel.emit();
  }
}
