import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  status: number; // status in percentage (0-100)
  collaborators: string[];
  managers: string[];
  approvers: string[];
  scrumMasters: string[];
  score: number;
}

@Component({
  selector: 'app-features-1',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent implements OnInit {

  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor() { }

  ngOnInit(): void {
    // Example data (this could be fetched from an API in a real application)
    this.projects = [
      {
        name: 'Project Alpha',
        startDate: '2024-01-01',
        endDate: '2024-06-01',
        status: 75,
        collaborators: ['Alice', 'Bob'],
        managers: ['Eve'],
        approvers: ['John'],
        scrumMasters: ['David'],
        score: 85
      },
      {
        name: 'Project Beta',
        startDate: '2024-03-01',
        endDate: '2024-09-01',
        status: 50,
        collaborators: ['Tom', 'Jerry'],
        managers: ['Sam'],
        approvers: ['Linda'],
        scrumMasters: ['Jake'],
        score: 72
      },
      {
        name: 'Project Beta',
        startDate: '2024-03-01',
        endDate: '2024-09-01',
        status: 50,
        collaborators: ['Tom', 'Jerry'],
        managers: ['Sam'],
        approvers: ['Linda'],
        scrumMasters: ['Jake'],
        score: 72
      },
      {
        name: 'Project Beta',
        startDate: '2024-03-01',
        endDate: '2024-09-01',
        status: 50,
        collaborators: ['Tom', 'Jerry'],
        managers: ['Sam'],
        approvers: ['Linda'],
        scrumMasters: ['Jake'],
        score: 72
      },
      // Add more projects as needed
    ];
  }

  openProjectDetails(project: Project): void {
    this.selectedProject = project;
    // Logic to open the modal
    const projectDetailsModal: HTMLElement | null = document.getElementById('projectDetailsModal');
    if (projectDetailsModal) {
      const modalInstance = new Modal(projectDetailsModal);
      modalInstance.show();
    }
  }

  getStatusClass(status: number): string {
    if (status === 100) {
      return 'bg-success'; // Green
    } else if (status > 50) {
      return 'bg-primary'; // Blue
    } else if (status > 0) {
      return 'bg-warning'; // Yellow
    } else {
      return 'bg-danger'; // Red
    }
  }
}
