import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherService } from '../features/weather.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('4368').subscribe((data) => {
      this.weather = data;
    });
  }
}
