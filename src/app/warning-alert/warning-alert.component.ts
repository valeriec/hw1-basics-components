import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>warning message</p>
  `,
  styles: [
    ` p {
        padding: 10px;
        background-color: #ec5763;
        border: 2px solid #ff0000;
        font-weight: bold;
        font: 1rem 'MutatorSans', sans-serif;
        font-size: 20px;
      }
    `
  ]
})
export class WarningAlertComponent {

}