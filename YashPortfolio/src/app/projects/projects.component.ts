import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      link: 'https://your-portfolio-link.com'
    },
    {
      name: 'E-commerce App',
      description: 'An e-commerce platform for buying and selling products.',
      link: 'https://your-project-link.com'
    }
  ];
}
