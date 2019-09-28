import { Component, Injector, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AsaadComponent } from './asaad.component';

@Component({
  selector: 'app-root',
  template: `
    <h2>Loading Dynamic Component</h2>  
    <input placeholder="verb" #verb/><button (click)="add(verb.value)">Add</button>
    <div #dynamic></div>
  `,
})
export class AppComponent {
  @ViewChild('dynamic', { read: ViewContainerRef, static: false }) dynamic;

  constructor(private injector: Injector, private factoryResolver: ComponentFactoryResolver) { }

  add(verb) {
    // find the component factory
    const factory = this.factoryResolver.resolveComponentFactory(AsaadComponent);
    // create instance
    const asaad = factory.create(this.injector);
    // add input
    asaad.instance.verb = verb;
    // we can also listen to outputs: asaad.instance.event.subscribe()

    // add to DOM
    this.dynamic.insert(asaad.hostView);
  }

}
