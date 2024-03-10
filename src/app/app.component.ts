import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { Store } from "@ngrx/store";
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    MatGridListModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    SpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading!: boolean;

  ngOnInit(): void {
    this.loadingApp();
  }

  loadingApp() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
