import { UserRepository } from './UserRepositories';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from './UserData';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent implements OnInit {
  constructor(private dataService: DataService) {}
  page: number = 1;
  repositories!: UserRepository[];
  totalRecords!: number;
  userData!: UserData;
  fetchingInitialData:boolean=true;
  //getting data when the component is initialized
  ngOnInit(): void {
    this.dataService.getSufficientData(this.page).subscribe((res) => {
      this.fetchingInitialData=false;
      this.userData = res['message1'];
      this.totalRecords = res['message2'];
      this.repositories = res['message3'];
    });
  }
}
