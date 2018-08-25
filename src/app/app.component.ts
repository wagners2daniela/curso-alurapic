import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://img00.deviantart.net/bbbb/i/2013/041/9/8/african_male_lion_simon_standing_by_charfade-d5ugfnl.png',
      description: 'Leão'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg',
      description: 'Leoa'
    },
    {
      url: 'https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/144922528/images/1412967253.jpeg',
      description: 'Leoa'
    }
  ];
}
