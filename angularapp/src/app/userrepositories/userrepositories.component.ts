import { repo } from './../repository/repo';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userrepositories',
  templateUrl: './userrepositories.component.html',
  styleUrls: ['./userrepositories.component.scss'],
})
export class UserrepositoriesComponent implements OnInit {
  @Input() repositories!: repo[];
  @Input() totalRecords!: number;
  @Input() page: number = 1;
  @Input() serverPagination=true;
  previousPage: number = this.page;
  fetchingRepositories!:boolean;
  constructor(public dataService: DataService) {}
  ngOnChanges() {
    //handling when the page requested is not the first page
    if (this.page !== 1) {
      this.getPageNumber(this.page);
    }
  }
  ngOnInit(): void {}

  //make a request to get the repositories
  getPageNumber(page: number) {
    if (this.previousPage === page) {
      //do nothing
    } else {
      this.fetchingRepositories=true;
      this.repositories = [];
      this.previousPage = page;
      this.dataService
        .getRepositories(page, this.dataService.getLimit())
        .subscribe((res) => {
          this.fetchingRepositories=false;
          this.repositories = res['message'];
        });
    }
  }
}
