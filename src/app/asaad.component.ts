import { Component, Input } from '@angular/core';

@Component({
  selector: 'asaad',
  template: `
    <p>
      asaad {{verb}}!
    </p>
  `,
  styles: []
})
export class AsaadComponent {
  @Input('verb') verb;

}
