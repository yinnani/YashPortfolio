import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = ['JavaScript', 'Angular', 'TypeScript', 'HTML & CSS', 'Node.js', 'SQL'];
}
