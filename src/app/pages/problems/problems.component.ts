import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  clickMessage = "";
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  clickEvent(){
    this.clickMessage = "You have clicked"
  }
}


