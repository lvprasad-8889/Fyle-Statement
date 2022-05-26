import { UserData } from './../userprofile/userprofile/UserData';
import { ShowImageComponent } from './../show-image/show-image.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  @Input() userData!: UserData;
  constructor(private matDialog: MatDialog, private matSnackBar: MatSnackBar) {}
  //to copy the content 
  copyToClipboard(input: string) {
    navigator.clipboard.writeText(input);
    this.matSnackBar.open('copied', 'Undo', { duration: 2000 });
  }
  //to show profile
  openDialog() {
    this.matDialog.open(ShowImageComponent, { data: this.userData.userImage });
  }
}
