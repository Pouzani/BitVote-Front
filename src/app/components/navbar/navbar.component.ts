import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IconDefinition, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../pages/login/login.service';
import { Subscription } from 'rxjs';
import { LoginResponse } from '../../models/login.model';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          width: '0',
        })
      ),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private userSub: Subscription = new Subscription();
  user: LoginResponse | null = null;
  isAuthenticated: boolean = false;
  faBitcoin: IconDefinition = faBitcoin;
  faRightToBracket: IconDefinition = faRightToBracket;
  @Input() isLoading: boolean = false;
  state: string = 'normal';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    console.log(this.user);

    this.userSub = this.loginService.user.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
