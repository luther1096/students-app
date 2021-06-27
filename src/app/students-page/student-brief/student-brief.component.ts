import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-brief',
  templateUrl: './student-brief.component.html',
  styleUrls: ['./student-brief.component.css']
})
export class StudentBriefComponent implements OnInit {
  // student = {
  //   id: 101,
  //   name: 'John Doe',
  //   address: 'Bangalore',
  //   imgUrl: 'https://i.pravatar.cc/300'
  // }
  @Input() student
  @Output() studentSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.studentSelected.emit();
  }

}
