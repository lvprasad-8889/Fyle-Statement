import { repo } from './../repository/repo';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  requiredRepository: string = '';
  previousSearchedRepository = '';
  notEnteredData: boolean = false;
  fetchingRequiredRepository!: boolean;
  requiredRepositories: repo[] = [];
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  //search repositories from the input box
  searchRepository() {
    if (this.requiredRepository.trim().length===0) {
      this.notEnteredData = true;
    } else if (
      this.previousSearchedRepository ===
      this.requiredRepository.trim().toLowerCase()
    ) {
      //do nothing
    } else if (this.requiredRepository.trim().length > 0) {
      this.dataService.displayRequiredRepositories = true;
      this.fetchingRequiredRepository = true;
      this.previousSearchedRepository = this.requiredRepository
        .trim()
        .toLowerCase();
      this.notEnteredData = false;
      this.dataService
        .getRequiredRepository(this.requiredRepository.trim().toLowerCase())
        .subscribe((res) => {
          this.fetchingRequiredRepository = false;
          this.requiredRepositories = res['message'];
        });
    }
  }

  //show complete repositories
  showRepositories() {
    this.dataService.displayRepositories();
    this.notEnteredData = false;
    this.requiredRepository = '';
  }
}
