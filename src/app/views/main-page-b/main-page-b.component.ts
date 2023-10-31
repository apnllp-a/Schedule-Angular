import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { UserAllService } from 'src/app/services/user/user-all.service';

@Component({
  selector: 'app-main-page-b',
  templateUrl: './main-page-b.component.html',
  styleUrls: ['./main-page-b.component.scss']
})
export class MainPageBComponent implements OnInit {
  today: number = Date.now();
  selected:string='';
  userAll: Tutorial[];
  user_all: Tutorial[];
  length = 0;
  name = '';
  constructor(private servicetestService: ServicesTestService, private userAllService: UserAllService) { }

  ngOnInit(): void {
    
    this.retrieveUser()
    this.searchByFirstname(this.name)
  }

  retrieveUser(): void {
    this.userAllService.getAll()
      .subscribe({
        next: (data) => {
          this.userAll = data;
          this.length = data.length;
          console.log(data)


        },
        error: (e) => console.error(e)
      });
  }

  searchByFirstname(firstname: string): void {
    // Convert the search query to lowercase
    const searchQuery = firstname.toLowerCase();

    // Use Array.prototype.filter() to search for data with a specific firstname
    if (searchQuery) {
      const searchResult = this.userAll.filter(user => user?.firstname?.toLowerCase() === searchQuery);
      console.log(searchResult);

      // Assign the search results to the searchResult variable
      this.userAll = searchResult;
    }
  }

  searchReset(): void {
    this.userAllService.getAll()
      .subscribe({
        next: (data) => {
          this.userAll = data;
          this.length = data.length;
          // console.log(this.user_all)

        },
        error: (e) => console.error(e)
      });
  }

}
