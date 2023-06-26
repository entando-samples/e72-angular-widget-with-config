import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnChanges {
  @Input() config !: string;
  configParsed: any;
  name: any;
  title = 'angular-widget';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['config']) {
      console.log("config changes ", this.config)
      this.configParsed = JSON.parse(this.config);
      this.name = (this.configParsed && this.configParsed.params) ? this.configParsed.params.name : "";
      console.log("params ", this.name)
    }
  }
  
}
