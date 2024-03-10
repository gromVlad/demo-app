import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { WindowService } from '../tasks/services/windowService.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private readonly router = inject(Router);

  dataNow!: Date;
  taskWindow!: boolean;

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.dataNow = new Date();
  }

  openTaskWindowForCreation(): void {
    this.router.navigateByUrl('/tasks');
  }

  getGreeting(): string {
    const hours = this.dataNow.getHours();

    if (hours < 12) {
      return 'Good morning';
    } else if (hours >= 12 && hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }
}
