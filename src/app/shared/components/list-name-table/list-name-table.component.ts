import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { debounceTime } from 'rxjs';
import { AccountComponent } from '../account/account.component';
import { UserAll } from '../../../models/user/user-all.model';
import { UserAllService } from '../../../services/user/user-all.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from 'src/app/models/tutorial.model';
import { da } from 'date-fns/locale';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-name-table',
  templateUrl: './list-name-table.component.html',
  styleUrls: ['./list-name-table.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListNameTableComponent implements OnInit {
  cities: City[];
  selectedCity: City | undefined;
  first = 0;
  rows = 10;
  expression = true;
  user_all: UserAll[];
  sortBydate:any;
  currentUserAll: UserAll = {};
  currentIndex = -1;
  name = '';
  length: number;



  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(1000));


  inputSearch(text: string) {
    this.onInput.emit(text);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.user_all ? this.first === (this.user_all.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.user_all ? this.first === 0 : true;
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "ยืนยันการสมัครหรือ ไม่",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "ยืนยันการสมัคร"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "ยกเลิกการสมัคร"
        });
      }
    });
  }
  searchName(): void {
    this.currentUserAll = {};
    this.currentIndex = -1;

    this.userAllService.findByName(this.name).subscribe({
      next: (data) => {
        this.user_all = data;
        console.log(this.user_all)
      },
      error: (e) => console.error(e)
    });
  }

  retrieveUserAlls(): void {
    this.userAllService.getAll()
      .subscribe({
        next: (data) => {
          this.user_all = data;
          this.length = data.length;
          console.log(this.user_all)

        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUserAlls();
    this.currentUserAll = {};
    this.currentIndex = -1;
  }

  setActiveUserAlls(tutorial: UserAll, index: number): void {
    this.currentUserAll = tutorial;
    this.currentIndex = index;
  }


  sortByDate(): void {
    this.userAllService.getAll().subscribe({
      next:(data)=>{
        
        this.sortBydate = data
        console.log(this.sortBydate )
      },
      error: (e) => console.error(e)
    });
  }



  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialog: MatDialog, private userAllService: UserAllService
    , private route: ActivatedRoute,
    private router: Router, private http: HttpClient) {
    this.cities = [
      { name: 'วันที่', code: 'NY' },
      { name: 'ระดับพนักงาน', code: 'PRS' }
    ];

  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(AccountComponent, {
      panelClass: 'custom-modalbox',
      enterAnimationDuration:'12000ms',
      exitAnimationDuration:'2000ms',
      data:{
        index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.retrieveUserAlls()
    this.searchName()
    this.sortByDate()
  }

}
