import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { APIModule } from '@avans-nx-project/frontend/features';
import { UIModule } from '@avans-nx-project/frontend/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
    RouterLink, 
    UIModule, 
    APIModule,
    HttpClientModule
  ],  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'key-to-happiness-web';
  ngOnInit(): void {
    console.log('initialised')
  }
}
