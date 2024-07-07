import { Component, OnInit } from "@angular/core";
import { IKey } from "@avans-nx-project/shared/api";
import { ActivatedRoute, Router } from '@angular/router';
import { KeyService } from "@avans-nx-project/frontend/features";
import { Subscription } from "rxjs";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'key-to-happiness-web-key-read-all',
  templateUrl: './key-read-all.component.html',
  styleUrls: ['./key-read-all.component.css'],
})

export class KeyReadAllComponent implements OnInit {
  keys: IKey[] = []
  subscription: Subscription | null = null;

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    private keyService: KeyService,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.keyService.readOneKeyWithAllUniqueGame().subscribe(
      (keys) => {
        if (keys !== null) {
          this.keys = keys;
        }
      },
      (error) => {
        console.log("Error fetching keys", error);
      }
    )
  }
}