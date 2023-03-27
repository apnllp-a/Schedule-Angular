import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';
import { UserAll } from '../../models/user/user-all.model';
import { UserAllService } from '../../services/user/user-all.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-main-page-hd',
  templateUrl: './main-page-hd.component.html',
  styleUrls: ['./main-page-hd.component.scss'],

})
export class MainPageHdComponent implements OnInit {
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



  constructor(
    public dialog: MatDialog, private userAllService: UserAllService
    , private route: ActivatedRoute,
    private router: Router, private http: HttpClient) {
    this.cities = [
      { name: 'วันที่', code: 'NY' },
      { name: 'ระดับพนักงาน', code: 'PRS' }
    ];

  }

 

  ngOnInit() {
    this.retrieveUserAlls()
    this.searchName()
    this.sortByDate()
  }

}
