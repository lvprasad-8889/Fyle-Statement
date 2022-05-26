import { Component, Input, OnInit } from '@angular/core';
import { repo } from './repo';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  @Input() eachRepository!: repo;
  @Input() numberOfWords: number = 5;
  @Input() numberOfSkills: number = 2;
  descriptionLength: number = 0;
  dummyDescription: string = '';
  showLessText: boolean = false;
  preRequisitesLength: number = 0;
  lessRequisites: Array<string> = [];
  showSkills: boolean = false;
  ngOnInit() {
    this.descriptionLength =
      this.eachRepository.projectDescription.split(' ').length;
    this.dummyDescription = this.eachRepository.projectDescription
      .split(' ')
      .slice(0, this.numberOfWords)
      .join(' ');
    this.preRequisitesLength = this.eachRepository.preRequisites.length;
    this.lessRequisites = this.eachRepository.preRequisites.slice(
      0,
      this.numberOfSkills
    );
  }
  constructor() {}

  //show skills
  showCompleteSkills() {
    this.lessRequisites = this.eachRepository.preRequisites;
    this.showSkills = !this.showSkills;
  }
  //hide skills
  showLessSkills() {
    this.lessRequisites = this.eachRepository.preRequisites.slice(
      0,
      this.numberOfSkills
    );
    this.showSkills = !this.showSkills;
  }
  //show description
  showCompleteDescription() {
    this.dummyDescription = this.eachRepository.projectDescription;
    this.showLessText = !this.showLessText;
  }
  //hide description
  showLessDescription() {
    this.dummyDescription = this.eachRepository.projectDescription
      .split(' ')
      .slice(0, this.numberOfWords)
      .join(' ');
    this.showLessText = !this.showLessText;
  }
}
