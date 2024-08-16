import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi aplicación Angular';  // Soluciona el primer error

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    const browserLang = this.translate.getBrowserLang() || 'en'; // Si es undefined, usar 'en'
    const validLang = browserLang.match(/en|es/) ? browserLang : 'en';
    this.translate.use(validLang);  // Soluciona los errores 2 y 3
  }
}
