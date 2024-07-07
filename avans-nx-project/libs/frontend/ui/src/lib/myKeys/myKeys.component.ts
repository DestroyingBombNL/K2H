import { Component, OnInit } from "@angular/core";
import { IKey } from "@avans-nx-project/shared/api";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, KeyService } from "@avans-nx-project/frontend/features";
import { Subscription } from "rxjs";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'key-to-happiness-web-my-keys',
  templateUrl: './myKeys.component.html',
  styleUrls: ['./myKeys.component.css'],
})

export class HistoryComponent implements OnInit {
  liveKeys: IKey[] | null = null;
  purchasedKeys: IKey[] | null = null;
  soldKeys: IKey[] | null = null;
  subscription: Subscription | null = null;

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    private keyService: KeyService,
    private authenticationService: AuthenticationService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    const user = await this.authenticationService.getUser();
    if (user) {
      this.keyService.readAllKeyPurchasedByUser(user._id).subscribe(
        (keys) => {
          if (keys !== null) {
            this.purchasedKeys = keys;
          }
        },
        (error) => {
          console.log("Error fetching myKeys of all purchased keys", error);
        })
      this.keyService.readAllKeySoldByUser(user._id).subscribe(
        (keys) => {
          if (keys !== null) {
            this.soldKeys = keys;
          }
        },
        (error) => {
          console.log("Error fetching myKeys of all sold keys", error);
        })
        this.keyService.readAllKeyLiveByUser(user._id).subscribe(
          (keys) => {
            if (keys !== null) {
              this.liveKeys = keys;
            }
          },
          (error) => {
            console.log("Error fetching myKeys of all live keys", error);
        })
      }
    }
}