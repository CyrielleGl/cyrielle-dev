import { Component } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cyrielledev';

  constructor(private utilsService: UtilsService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.utilsService.initFaIcons();
  }
}
