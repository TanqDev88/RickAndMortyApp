import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi aplicación Angular';  

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    const browserLang = this.translate.getBrowserLang() || 'en'; 
    const validLang = browserLang.match(/en|es/) ? browserLang : 'en';
    this.translate.use(validLang);  
  }
}
