import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`
    //template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { 
    ngOnInit() {
        // setTimeout(function() {
        //     let componentHandler = window['componentHandler'] || '';
        //     if (!componentHandler) {
        //         console.error('MDL is missing.');
        //         return;
        //     }
        //     componentHandler.upgradeAllRegistered();
        //     console.log('Injected MDL on DOM');
        // }, 100);
    }

}
