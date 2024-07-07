import { Component, OnInit } from "@angular/core";
import { IKey } from "@avans-nx-project/shared/api";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, KeyService, UserService } from "@avans-nx-project/frontend/features";
import { Subscription } from "rxjs";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'key-to-happiness-web-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})

export class GameDetailsComponent implements OnInit {
  keys: IKey[] | null = null;
  key: IKey | null = null;
  subscription: Subscription | null = null;
  trailer: string | null = null;

  constructor(
    readonly router: Router,
    readonly route: ActivatedRoute,
    private keyService: KeyService,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const gameName = params.get('gameName');
      if (gameName) {
        this.subscription = this.keyService.readAllAvailableKeyWithGame(gameName).subscribe(
          (keys) => {
            if (keys !== null) {
              this.keys = keys;
              this.key = keys[0];
              this.trailer = this.key.game.trailerLink;
            }
          },
          (error) => {
            console.log("Error fetching keys", error);
          }
        );
      } else {
        console.log("Game name is null");
      }      
    })
  }

  purchaseKey(_keyId: string | undefined): void {
    if (_keyId) {
      const user = this.authenticationService.getUser();
      if (user) {
        this.keyService.purchaseKey(_keyId, user).subscribe(
          (response) => {
            if (response?.buyer) {
              this.router.navigate(['/myKeys']);
            } else {
              console.log('something failed')
            }
          })
      } else {
        console.log('User is not logged in')
        this.router.navigate(['/login']);
      }
    }
    return;
  }
}