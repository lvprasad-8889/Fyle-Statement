import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserprofileComponent } from './userprofile/userprofile/userprofile.component';
import { IconComponent } from './icon/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserrepositoriesComponent } from './userrepositories/userrepositories.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowImageComponent } from './show-image/show-image.component';
import { RepositoryComponent } from './repository/repository.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from './services/data.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    IconComponent,
    UserdetailsComponent,
    UserrepositoriesComponent,
    ShowImageComponent,
    RepositoryComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
