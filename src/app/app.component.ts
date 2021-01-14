import { Component } from '@angular/core';
import { SkillService } from './services/skill-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  skillList = [];
  constructor(private skillService: SkillService) {
    this.skillList = skillService.skills;
  }
}
