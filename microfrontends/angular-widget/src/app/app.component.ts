import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @Input() config !: string;
  name: any;
  title = 'angular-widget';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      this.name = JSON.parse(this.config).params.name;
      console.log("config changes ", this.config, ", params ", this.name)
    }
  }
  
}
