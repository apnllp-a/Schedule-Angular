import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api_/api.service';
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
  toogleDeleteTime = false;
  successStatus = false;
  workingHours: number | undefined;
  nameTable: string;
  attendWork: Time;
  finishWork: Time;
  lateTime: number;

  data_shifts: data_shift[];
  savedData: any[] = [];
  dataWorkTime: any[] = [];
  detailsOfMonths: any[] = [];
  detailsOfMonthsForEdit: any;

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDetailsOfMonth();

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
  btnDelete = false;
  btnEdit = false;

  clickBtnDelete() {
    this.btnDelete = true;
    this.btnEdit = false;

  }

  clickBtnEdit() {
    this.btnDelete = false;
    this.btnEdit = true;

  }

  deleteByID(s: any) {
    console.log(s)
  }
  t: string;
  ts: string;
  td: string;
  n: number;
  id:string;
  EditByID(s: any): void {
    this.apiService.getTypeOfShiftsById(s).subscribe(data => {
      this.detailsOfMonthsForEdit = data;
      this.t = this.detailsOfMonthsForEdit.NameOfType;
      this.td = this.detailsOfMonthsForEdit.TimeIn;
      this.ts = this.detailsOfMonthsForEdit.TimeOut;
      this.n = this.detailsOfMonthsForEdit.LateTime;
      this.id = s;

      this.toogleDeleteTime = true;
    });
  }

  updateShiftDetails(): void {
    const updatedDetails = {
      NameOfType: this.t,
      TimeIn: this.td,
      TimeOut: this.ts,
      LateTime: this.n
    };

    this.apiService.updateTypeOfShifts(this.id, updatedDetails).subscribe(response => {
      console.log('Update successful', response); 
      location.reload();
    }, error => {
      console.error('Update failed', error);
    });
  }





  getDetailsOfMonth() {
    this.apiService.getTypeOfShifts().subscribe(data => {
      this.detailsOfMonths = data;
      console.log(this.detailsOfMonths)
    });
  }
  newDetail: any = { TimeIn: '', TimeOut: '', LateTime: 0, NameOfType: '' };

  addDetailOfMonth() {
    if (this.newDetail.TimeIn && this.newDetail.TimeOut && this.newDetail.LateTime && this.newDetail.NameOfType) {
      this.apiService.addTypeOfShifts(this.newDetail).subscribe(data => {
        this.detailsOfMonths.push(data);
        this.newDetail = { TimeIn: '', TimeOut: '', LateTime: 0, NameOfType: '' };
        this.successStatus = true;
      }, error => {
        console.error('Error adding detail:', error);
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}
