import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
}
