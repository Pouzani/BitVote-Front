import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    trigger('loadingAnimation', [
      state('start', style({ width: '0', opacity: '1' })),
      state('middle', style({ width: '60%', opacity: '1' })),
      state('end', style({ width: '100%', opacity: '0' })),
      transition('start => middle', animate('800ms linear')),
      transition('middle => end', animate('200ms linear'))
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  @Input() loadingState: 'start' | 'middle' | 'end' = 'start';

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'end') {
      this.loadingState = 'start';
    }}
}
