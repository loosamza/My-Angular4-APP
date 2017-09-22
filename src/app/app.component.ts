import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
    ]),
  ]
})
export class AppComponent {
  title = 'app'

  myObject = {
    name : 'Piyapat Plydaung III',
    age : 23
  }

  myArr = ['him','hers','yours','theirs'];

  imageLogo = 'https://i.amz.mshcdn.com/l_RddH67VXjTvUnmzx_8bNUcSqQ=/950x534/filters:quality(90)/2013%2F04%2F30%2F1e%2Fcodingfutur.d5369.jpg'

  buttonStatus = true;

  myEvent(event) {
    console.log(event);
  }

  state: string = 'small';
  
    animateMe() {
          this.state = (this.state === 'small' ? 'large' : 'small');
    }
}
