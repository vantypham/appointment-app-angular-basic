import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {
  

  newApptTitle : string = '';
  newApptDate : Date = new Date();
  //list
  appointments : Appointment[] = []
  //oninit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    let savedData = localStorage.getItem("appoinments");
    this.appointments = savedData ? JSON.parse(savedData) : [];
  };
  //click
  clickAddBtn() {
    
    if (this.newApptTitle.trim().length && this.newApptDate) {
      //if we have both values
      let newAppt: Appointment = {
        id: Date.now(),
        title: this.newApptTitle,
        date: this.newApptDate
      }

      this.appointments.push(newAppt);
      console.log('after PUSH');

      //reset
      this.newApptDate = new Date();
      this.newApptTitle = '';

      //localstorage
      localStorage.setItem("appoinments", JSON.stringify(this.appointments))
      
    }
    //alert(this.appointments.length);
  }

  //remove item
  remove(index: number) {
    this.appointments.splice(index, 1);
    //localstorage after remove item
    localStorage.setItem("appoinments", JSON.stringify(this.appointments))
  }

}
