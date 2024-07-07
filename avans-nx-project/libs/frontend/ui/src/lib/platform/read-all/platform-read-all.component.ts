import { Component, OnInit } from "@angular/core";
import { IPlatform } from "@avans-nx-project/shared/api";
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from "@avans-nx-project/frontend/features";
import { Subscription } from "rxjs";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'key-to-happiness-web-platform-read-all',
  templateUrl: './platform-read-all.component.html',
  styleUrls: ['./platform-read-all.component.css'],
})

export class PlatformReadAllComponent implements OnInit {
  platforms: IPlatform[] = []
  subscription: Subscription | null = null;

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    private platformService: PlatformService,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.platformService.readAll().subscribe(
      (platforms) => {
        if (platforms !== null) {
          this.platforms = platforms;
        }
      },
      (error) => {
        console.log("Error fetching platforms", error);
      }
    )
  }
}