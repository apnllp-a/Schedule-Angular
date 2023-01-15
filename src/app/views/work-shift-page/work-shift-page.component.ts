import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountComponent } from 'src/app/shared/components/account/account.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailWorkShiftComponent } from 'src/app/shared/components/detail-work-shift/detail-work-shift.component';


@Component({
  selector: 'app-work-shift-page',
  templateUrl: './work-shift-page.component.html',
  styleUrls: ['./work-shift-page.component.scss'],
})
export class WorkShiftPageComponent implements OnInit {
  products = [
    {
      code: 5,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 6,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 7,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 8,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 9,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 10,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
      date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 11,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 12,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 13,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 14,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 15,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    },
    {
      code: 16,
      name: 'Apinan Limlampai',
      category: 'Wikran SangChan',
      quantity: 'Departments',
       date: '20-12-2022',
      admin: 'admin-Ap'
    }
  ];
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DetailWorkShiftComponent,{
  
      panelClass:'custom-modalbox',
     
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
