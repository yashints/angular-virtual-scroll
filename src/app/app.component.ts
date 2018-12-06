import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IImage {
  title: string;
  src: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: IImage[] = Array.from(new Array(1000), (x, i) => ({
    title: `Image #${i}`,
    src: `https://picsum.photos/200/?${i}`
  }));

  observableImages = new BehaviorSubject<IImage[]>(this.images);
}
