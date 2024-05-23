import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface data_shift {
  department: string;
  month: string;
  hours: number;
}

interface dataWorkTime {
  nameTable: string;
  attendWork: Time;
  finishWork: Time;
  lateTime: number;
}
@Component({
  selector: 'app-edit-schedule-page',
  templateUrl: './edit-schedule-page.component.html',
  styleUrls: ['./edit-schedule-page.component.scss']
})
export class EditSchedulePageComponent implements OnInit {
  toogleCreateTableTime = false;
  successStatus = false;
  workingHours: number | undefined;
  nameTable: string;
  attendWork: Time;
  finishWork: Time;
  lateTime: number;

  data_shifts: data_shift[];
  savedData: any[] = [];
  dataWorkTime: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.savedData)
  }
  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  isDisabled(option: string): boolean {
    return this.selectedOption !== null && this.selectedOption !== option;
  }

  resetSelection() {
    this.selectedOption = null;
  }


  items = ['Front-end', 'Back-end', 'IT', 'Cooked'];
  selectedItem: string | null = null;

  onSelectionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedItem = target.value;
  }

  itemsMonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  selectedItemMonth: string | null = null;

  onSelectionChangeMonth(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedItemMonth = target.value;
  }


  saveData(): void {
    console.log('Selected Option:', this.selectedOption);
    console.log('Selected Department:', this.selectedItem);
    console.log('Selected Month:', this.selectedItemMonth);
    console.log('Working Hours:', this.workingHours);
    let test;

    if (this.selectedOption == 'all') {
      test = 'ทุกแผนก';
    } else {
      test = this.selectedItem;
    }


    const data_shifts = {
      department: test,
      month: this.selectedItemMonth,
      hours: this.workingHours,
    }

    this.savedData.push(data_shifts);
    console.log(this.savedData)

  }


  //สร้างประเภทเวรการทำงาน
  saveDataWorkTime(): void {
    // console.log('Nane of table', this.nameTable)
    // console.log('Attend Work', this.attendWork)
    // console.log('Finish Work', this.finishWork)
    // console.log('Late Time', this.lateTime)
    if (!this.nameTable || !this.attendWork || !this.finishWork) {
      console.error("Error: Incomplete data. Cannot save work time data.");
      return;
  }
    const data_work = {
      nameTable: this.nameTable,
      attendWork: this.attendWork,
      finishWork: this.finishWork,
      lateTime: this.lateTime,
    }
    // this.dataWorkTime.push(data_work)

    if (this.dataWorkTime.push(data_work)) {
      this.successStatus = true;
      this.toogleCreateTableTime = false
    }
    console.log(this.dataWorkTime)
  }

}
